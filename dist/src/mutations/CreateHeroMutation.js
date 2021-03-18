import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation CreateHeroMutation($input: CreateHeroInput!) {
    createHero(input: $input) {
      hero {
        id
        name
        date
      }
    }
  }
`;

function sharedUpdater(store, rootId, newEdge) {
  const root = store.get(rootId);
  const conn = ConnectionHandler.getConnection(
    root,
    'HeroesList_Heroes'
  );
  ConnectionHandler.insertEdgeAfter(conn, newEdge, null);
}

function CreateHeroMutation(rootId, name, date) {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          name,
          date
        }
      },
      updater: (store) => {
        const newHero = store.getRootField("createHero").getLinkedRecord("hero");
        sharedUpdater(store, rootId, newHero);
      },
      optimisticUpdater: (store) => {
        //
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => console.error(err),
    },
  );
}

export default CreateHeroMutation;