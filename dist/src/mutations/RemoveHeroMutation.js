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

let tempID = 0;

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
        const root = store
          .getRoot()
          .getLinkedRecord("Root");
        const conn = ConnectionHandler.getConnection(
          root,
          'HeroesList_Heroes',
        );
        console.log(conn);

        // console.log(store.getRoot());
        // const payload = store.getRootField('createHero');
        // const newEdge = payload.getLinkedRecord('hero');

        // ConnectionHandler.insertEdgeAfter(conn, newEdge);
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => console.error(err),
    },
  );
}

export default RemoveHeroMutation;