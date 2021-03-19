import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
import { useFragment } from 'react-relay/hooks';
import { ConnectionHandler } from 'relay-runtime';
import { v4 as uuidv4 } from 'uuid';

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
        const heroProxy = store.getRootField("createHero").getLinkedRecord("hero");
        const rootProxy = store.get(rootId);
        const rootConnection = ConnectionHandler.getConnection(
          rootProxy,
          'HeroesList_Heroes',
        );
        const newEdge = store.create(
          uuidv4(),
          'HeroEdge',
        );
        newEdge.setLinkedRecord(heroProxy, 'node');
        ConnectionHandler.insertEdgeAfter(rootConnection, newEdge);
      },
      optimisticUpdater: (store) => {
        const id = uuidv4();
        const id2 = uuidv4();
        const newHero = store.create(id, "Hero");
        newHero.setValue(name, 'name');
        newHero.setValue(date, 'date');
        newHero.setValue(id, 'id');
        const newEdge = store.create(
          id2,
          'HeroEdge',
        );
        newEdge.setLinkedRecord(newHero, 'node');
        const rootProxy = store.get(rootId);
        const rootConnection = ConnectionHandler.getConnection(
          rootProxy,
          'HeroesList_Heroes',
        );
        ConnectionHandler.insertEdgeAfter(rootConnection, newEdge);
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => console.error(err),
    },
  );
}

export default CreateHeroMutation;