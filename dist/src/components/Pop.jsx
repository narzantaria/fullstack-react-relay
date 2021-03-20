import React, { Fragment, useMemo } from 'react';
import { Button } from 'antd';
import PopSubscription from './PopSubscription';

function Pop() {
  return (
    <div style={{
      position: 'absolute', top: '50px', right: '50px', zIndex: 555
    }}>
      <Button type="primary" onClick={_ => PopSubscription()}>data</Button>
    </div>
  )
}

export default Pop;