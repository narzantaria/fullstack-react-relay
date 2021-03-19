import React, { Fragment } from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import HeroTpl from './HeroTpl';
import { v4 as uuidv4 } from 'uuid';

import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import AddHero from './AddHero';

function HeroesList({ root }) {
  console.log(root);
  const data = useFragment(
    graphql`
      fragment HeroesList_root on Root {
        Heroes (first: 100)
        @connection(key: "HeroesList_root", filters: []) 
        {
          edges {
            node {
              id
              ...HeroTpl_hero
            }
          }
        }        
      }
    `,
    root
  );
  return (
    <Fragment>
      <AddHero />
      {data.Heroes.edges.map(edge => (
        <HeroTpl hero={edge.node} key={uuidv4()} />
      ))}
    </Fragment>
  )
}

export default HeroesList;