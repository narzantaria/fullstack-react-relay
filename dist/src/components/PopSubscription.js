import { graphql, requestSubscription } from 'react-relay';
import environment from '../Environment';

const subscription = graphql`
  subscription PopSubscription {
    HeroesNumber {
      id
      number
    }
  }
`;

function PopSubscription() {
  requestSubscription(
    environment,
    {
      subscription,
      updater: store => {},
      onCompleted: () => {},
      onError: error => console.error(error),
    }
  );
}

export default PopSubscription;