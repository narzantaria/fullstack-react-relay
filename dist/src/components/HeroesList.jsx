import React, { Fragment } from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import HeroTpl from './HeroTpl';

import { createFragmentContainer, createPaginationContainer, graphql } from 'react-relay';

function HeroesList({ root }) {
  return (
    <Fragment>
      {root.Heroes.edges.map(edge => (
        <HeroTpl hero={edge.node} key={edge.node.id} />
      ))}
    </Fragment>
  )
}

export default createFragmentContainer(
  HeroesList, {
  root: graphql`
      fragment HeroesList_root on Root {
        Heroes (first: 100)
        @connection(key: "HeroesList_Heroes", filters: []) 
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
}
);