import React, { Fragment } from 'react';
import { Col, Layout, Row } from 'antd';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Heroes from './routes/Heroes';
import Hero from './routes/Hero';
import Pop from './components/Pop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Pop />
      <Layout.Content id="Main">
        <Row>
          <Col span={22} offset={1}>
            <Switch>
              <Route path="/heroes/:id" exact component={Hero} />
              <Route path="/heroes" exact component={Heroes} />
              <Route path="/" exact component={() => (
                <Fragment>
                  <h3>Main page</h3>
                  <hr className="gold" />
                </Fragment>
              )} />
            </Switch>
          </Col>
        </Row>
      </Layout.Content>
    </BrowserRouter>
  )
}

export default App;