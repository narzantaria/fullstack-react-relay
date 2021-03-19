import React from 'react';
import HeroForm from '../components/HeroForm';
import { graphql } from 'react-relay';
import { loadQuery, useLazyLoadQuery, usePreloadedQuery, useQueryLoader } from 'react-relay/hooks';
import environment from '../Environment';
import UpdateHeroMutation from '../mutations/UpdateHeroMutation';

// import HeroQuery from './__generated__/HeroQuery.graphql';

/** 
* const HeroQuery = graphql`
*   query HeroQuery($id: ID!) {
*     root {
*       Hero(id: $id) {
*         id
*         name
*         date
*       }
*     }
*   }
* `;
**/

const HeroQuery = graphql`
  query HeroQuery($id: ID!) {
    root {
      Hero(id: $id) {
        id
        name
        date
      }
    }
  }
`;

function Hero(props) {
  // const data = usePreloadedQuery(
  //   HeroQuery,
  //   {
  //     variables: { id: props.match.params.id }
  //   }
  // );

  const data = useLazyLoadQuery(
    HeroQuery,
    { id: props.match.params.id },
  );

  return (
    <div>
      <h3>Hero</h3>
      <hr className="gold" />
      <HeroForm
        id={props.match.params.id}
        data={data.root.Hero}
        sendbackData={({ name, date }) => {
          // console.log(args);
          UpdateHeroMutation(props.match.params.id, name, date);
        }}
      />
    </div>
  )
}
export default Hero;