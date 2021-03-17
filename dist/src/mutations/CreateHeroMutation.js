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
  // Get the current user record from the store
  const root = store.get(rootId);

  // Get the user's Todo List using ConnectionHandler helper
  const conn = ConnectionHandler.getConnection(
    root,
    'HeroesList_Heroes', // This is the connection identifier, defined here
    // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L76
  );

  // console.log(conn);

  // Insert the new todo into the Todo List connection
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

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
        // const payload = store.getRootField('createHero');
        // const newEdge = payload.getLinkedRecord('heroes');
        // sharedUpdater(store, rootId, newEdge);
        const qwerty = store.getRootField("Heroes");
        console.log(qwerty);
      },
      optimisticUpdater: (store) => {
        const id = 'client:newHero:' + tempID++;
        const node = store.create(id, 'Hero');
        node.setValue(name, 'name');
        node.setValue(date, 'date');
        const newEdge = store.create(
          'client:newEdge:' + tempID++,
          'Heroes',
        );
        newEdge.setLinkedRecord(node, 'node');
        sharedUpdater(store, rootId, newEdge);
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => console.error(err),
    },
  );
}

export default CreateHeroMutation;