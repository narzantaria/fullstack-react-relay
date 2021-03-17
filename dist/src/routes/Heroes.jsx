import React, { Fragment } from 'react';
import { Button } from 'antd';
import { graphql, usePreloadedQuery } from 'react-relay';
import environment from '../Environment';
import HeroesList from '../components/HeroesList';
import AddHero from '../components/AddHero';



function Heroes(props) {
  const data = usePreloadedQuery(
    graphql`
      query HeroesQuery {
        root {
          ...HeroesList_root
        }
      }
    `,
    environment
  );
  return (
    <Fragment>
      <h3>Heroes</h3>
      <hr className="gold" />
      <AddHero />
      <HeroesList root={data.root} />
    </Fragment>
  )
}

export default Heroes;