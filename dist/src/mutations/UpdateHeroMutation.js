import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
import { Button, message } from 'antd';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation UpdateHeroMutation($input: UpdateHeroInput!) {
    updateHero(input: $input) {
      updatedId
      updated
    }
  }
`;

function UpdateHeroMutation(id, name, date) {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id: id,
          name: name,
          date: date
        }
      },
      updater: (store) => {
        const heroProxy = store.getRootField("updateHero").getValue("updatedId");
        const hero = store.get(heroProxy);
        hero.setValue(name, 'name');
        hero.setValue(date, 'date');
      },
      optimisticUpdater: (store) => {
        const hero = store.get(id);
        hero.setValue(name, 'name');
        hero.setValue(date, 'date');
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
        message.success('Document updated successfully');
      },
      onError: err => console.error(err),
    },
  );
}

export default UpdateHeroMutation;