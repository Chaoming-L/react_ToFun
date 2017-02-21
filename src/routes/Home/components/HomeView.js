import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.less'
import { Tabs, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;


function callback(key) {
  console.log(key);
}

const HomeView = React.createClass({
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="选项卡一" key="1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项卡一内容
            </div>
            <img
                alt='This is a duck, because Redux!'
                className='duck'
                src={DuckImage} />
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项卡二内容
            </div>
             <img
                alt='This is a duck, because Redux!'
                className='duck'
                src={DuckImage} />
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项卡三内容
            </div>
             <img
                alt='This is a duck, because Redux!'
                className='duck'
                src={DuckImage} />
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
});
export default HomeView
