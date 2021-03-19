import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import RemoveHeroMutation from '../mutations/RemoveHeroMutation';
import { DeleteOutlined } from '@ant-design/icons';

function HeroTpl(props) {
  const data = useFragment(
    graphql`
      fragment HeroTpl_hero on Hero {
        id
        name
        date
      }
    `,
    props.hero
  );
  return (
    <Row>
      <Col span={22}><Link to={`/heroes/${data.id}`}><h3>{data.name}</h3></Link></Col>
      <Col span={2}>
        <DeleteOutlined
          onClick={_ => RemoveHeroMutation(data.id)}
          style={{ float: "right" }}
        />
      </Col>
    </Row>
  )
}

export default HeroTpl;