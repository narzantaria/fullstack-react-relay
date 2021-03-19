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
        //
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