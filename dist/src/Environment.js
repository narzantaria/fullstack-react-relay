import { Environment, Network, Observable, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const subscriptionClient = new SubscriptionClient('ws://localhost:8888/graphql', {
  reconnect: true,
});

const subscribe = (request, variables) => {
  const subscribeObservable = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables,
  });
  return Observable.from(subscribeObservable);
};

async function fetchRelay(params, variables, _cacheConfig) {
  const response = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.json();

  if (Array.isArray(json.errors)) {
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors,
      )}`,
    );
  }

  return json;
}

export default new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10,
  }),
});