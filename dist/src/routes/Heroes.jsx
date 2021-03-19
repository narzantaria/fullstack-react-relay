import React, { Fragment } from 'react';
import { Button } from 'antd';
import { graphql } from 'react-relay';
import { loadQuery, useLazyLoadQuery, usePreloadedQuery } from 'react-relay/hooks';
import environment from '../Environment';
import HeroesList from '../components/HeroesList';
import AddHero from '../components/AddHero';

import HeroesQuery from './__generated__/HeroesQuery.graphql';

const loadedQuery = loadQuery(
  environment,
  HeroesQuery,
  {
    owner: 'facebook',
    name: 'relay',
  },
  { fetchPolicy: 'store-or-network' },
);

function Heroes(props) {
  const data = useLazyLoadQuery(
    graphql`
      query HeroesQuery {
        root {
          ...HeroesList_root
        }
      }
    `    
  );
  return (
    <Fragment>
      <h3>Heroes</h3>
      <hr className="gold" />
      <HeroesList root={data.root} />
    </Fragment>
  )
}

export default Heroes;