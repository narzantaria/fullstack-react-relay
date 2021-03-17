import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { createFragmentContainer, graphql } from 'react-relay';
import RemoveHeroMutation from '../mutations/RemoveHeroMutation';
import { DeleteOutlined } from '@ant-design/icons';

function HeroTpl({ hero }) {
  return (
    <Row>
      <Col span={22}><Link to={`/heroes/${hero.id}`}><h3>{hero.name}</h3></Link></Col>
      <Col span={2}>
        <DeleteOutlined
          onClick={_ => RemoveHeroMutation(hero.id)}
        />
      </Col>
    </Row>
  )
}

export default createFragmentContainer(
  HeroTpl, {
    hero: graphql`
      fragment HeroTpl_hero on Hero {
        id
        name
        date
      }
    `
  }
);