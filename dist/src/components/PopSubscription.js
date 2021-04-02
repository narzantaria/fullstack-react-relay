import { graphql, requestSubscription, Disposable } from 'react-relay';
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
      updater: store => {
        let population = store.getRootField("HeroesNumber").getValue("number");
        console.log(population);
      },
      onCompleted: () => {},
      onError: error => console.error(error),
    }
  );
}

export default PopSubscription;