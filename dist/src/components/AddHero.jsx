import React, { Fragment, useState } from 'react';
import { Button, Drawer } from 'antd';
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import HeroForm from './HeroForm';
import CreateHeroMutation from '../mutations/CreateHeroMutation';

function AddHero() {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <Button
        type="primary"
        className="Add_Btn"
        onClick={_ => setVisible(true)}
      >
        <PlusOutlined />
        <span>Add Hero</span>
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={_ => setVisible(false)}
        visible={visible}
      >
        <HeroForm
          sendbackData={(name, date) => {
            CreateHeroMutation("rootId", name, date);
            setVisible(false);
          }}
        />
      </Drawer>
    </Fragment>
  )
}

export default AddHero;