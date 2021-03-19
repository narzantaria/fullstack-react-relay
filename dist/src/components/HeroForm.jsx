import React from 'react';
import { Button, Form, Col, Row, Input, DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

function HeroForm({ data, sendbackData }) {
  return (
    <Form
      layout="vertical"
      initialValues={{
        ...data,
        date: data ? moment(new Date(data.date), dateFormat) : ''
        // date: moment(new Date())
      }}
      onFinish={values => {
        sendbackData({
          name: values.name, 
          date: new Date(values.date).toISOString()
        })
      }}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter user name' }]}
          >
            <Input placeholder="Please enter hero name" />
          </Form.Item>
          <Form.Item label="Hero birth date" name="date">
            <DatePicker
              size="medium"
              format={dateFormat}
              placeholder="Hero birth date"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >Save</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default HeroForm;