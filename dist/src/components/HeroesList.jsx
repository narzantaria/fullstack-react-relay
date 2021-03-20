import React, { Fragment, useEffect } from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import HeroTpl from './HeroTpl';
import { v4 as uuidv4 } from 'uuid';

import { graphql } from 'react-relay';
import { useFragment, usePaginationFragment } from 'react-relay/hooks';
import AddHero from './AddHero';

const paginationQuery = graphql`
  query HeroesListPaginationQuery(
    $count: Int!,
    $cursor: String,
  ) {
    viewer {
      ...HeroesList_viewer @arguments(count: $count, cursor: $cursor)
    }
  }
`;

function HeroesList({ viewer }) {
  useEffect(() => {    
    return () => {
      console.log("Effect");
    }
  }, [])
  /**
  * const data = useFragment(
  *   graphql`
  *     fragment HeroesList_viewer on Viewer {
  *       Heroes (first: 100)
  *       @connection(key: "HeroesList_Heroes", filters: []) 
  *       {
  *         edges {
  *           node {
  *             id
  *             ...HeroTpl_hero
  *           }
  *         }
  *       }        
  *     }
  *   `,
  *   viewer
  * );
  */

  const {
    data,
    loadNext,
    hasNext,
  } = usePaginationFragment(
    graphql`
      fragment HeroesList_viewer on Viewer
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "paginationQuery") 
      {
        Heroes(first: $count, after: $cursor)
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
    viewer
  );
  return (
    <Fragment>
      <AddHero />
      {data.Heroes.edges.map(edge => (
        <HeroTpl hero={edge.node} key={uuidv4()} />
      ))}
      <Button onClick={() => loadNext(5)}>
        <RightOutlined />
      </Button>
    </Fragment>
  )
}

export default HeroesList;