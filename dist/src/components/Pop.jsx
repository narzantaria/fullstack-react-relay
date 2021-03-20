import React from 'react'

function Pop() {
  return (
    <div>
    </div>
  )
}

export default Pop


/*
import React, { Fragment, useMemo } from 'react';
import { graphql } from 'react-relay';
import { Button } from 'antd';
import { useSubscription } from 'react-relay/hooks';

const subscription = graphql`
  subscription PopSubscription {
    HeroesNumber {
      number
    }
  }
`;

function Pop() {
  const data = useSubscription(subscription);
  return (
    <div style={{
      position: 'absolute',
      top: '50px',
      right: '50px',
      zIndex: 555
    }}>
      <Button type="primary" onClick={_ => console.log(data)}>data</Button>
    </div>
  )
}

export default Pop;
*/