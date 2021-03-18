import React, { Fragment } from 'react';
import { Button } from 'antd';
import { graphql, useQueryLoader, useLazyLoadQuery } from 'react-relay';
import environment from '../Environment';
import HeroesList from '../components/HeroesList';
import AddHero from '../components/AddHero';

const HeroesQuery = graphql`
  query HeroesQuery {
    root {
      ...HeroesList_root
    }
  }
`;

function Heroes(props) {
  const data = useLazyLoadQuery(
    HeroesQuery
  );
  return (
    <Fragment>
      <h3>Heroes</h3>
      <hr className="gold" />
      {/* <Button type="primary" onClick={_=>console.log(data)}>12345</Button> */}
      <AddHero />
      <HeroesList root={data.root} />
    </Fragment>
  )
}

export default Heroes;