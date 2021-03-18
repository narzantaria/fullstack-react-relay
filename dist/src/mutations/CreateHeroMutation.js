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
        const connectionRecord = ConnectionHandler.getConnection(
          store.get(rootId),
          'HeroesList_Heroes',
        );
        const node = store.getRootField("createHero").getLinkedRecord("hero");
        const newEdge = ConnectionHandler.buildConnectionEdge(
          store,
          connectionRecord,
          node,
        );
        ConnectionHandler.insertEdgeAfter(
          connectionRecord,
          newEdge,
        );
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