import { graphql, requestSubscription } from 'react-relay';
// import { useSubscription } from 'react-relay/hooks';
import environment from '../Environment';

const subscription = graphql`
  subscription PopSubscription {
    HeroesNumber {
      number
    }
  }
`;

function PopSubscription() {
  requestSubscription(
    environment,
    {
      subscription,
      onCompleted: () => {
        // server closed the subscription
      },
      onError: error => console.error(error),
    }
  );
}

export default PopSubscription;