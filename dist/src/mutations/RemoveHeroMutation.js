import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation RemoveHeroMutation($input: RemoveHeroInput!) {
    removeHero(input: $input) {
      deletedId
      deleted
    }
  }
`;

function RemoveHeroMutation(id) {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id
        }
      },
      updater: (store) => {
        const removedHero = store.getRootField("removeHero").getValue("deletedId");
        const rootProxy = store.get("rootId");
        const rootConnection = ConnectionHandler.getConnection(
          rootProxy,
          'HeroesList_Heroes',
        );
        ConnectionHandler.deleteNode(rootConnection,removedHero);
      },
      optimisticUpdater: (store) => {
        const rootProxy = store.get("rootId");
        const rootConnection = ConnectionHandler.getConnection(
          rootProxy,
          'HeroesList_Heroes',
        );
        ConnectionHandler.deleteNode(rootConnection,id);
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => console.error(err),
    },
  );
}

export default RemoveHeroMutation;