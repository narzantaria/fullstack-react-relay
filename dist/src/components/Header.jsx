import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Layout, Menu, Row } from 'antd';
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

function Header() {
  return (
    <Layout.Header>
      <Row>
        <Col span={22} offset={1}>
          <Menu
            mode="horizontal"
            id="Top_Nav"
          >
            <Menu.Item
              key="1"
              style={{ marginLeft: 0 }}
            >
              <Link to="/">
                <HomeOutlined />
                <span>Main</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
            >
              <Link to="/heroes">
                <UserOutlined />
                <span>Heroes</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header;