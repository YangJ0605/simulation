import React, {useState} from 'react';
import {HashRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import routes from './router'

import { Layout} from 'antd'
import AppSider from '@/components/app-sider'
import AppHeader from '@/components/app-header'
const { Header, Sider, Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Router>
      <Layout>
        <Sider className='app-sider' trigger={null} collapsible collapsed={collapsed}>
          <AppSider collapsed={collapsed}/>
        </Sider>
        <Layout>
          <Header style={{padding:0, background: '#f4f7fa'}}>
            <AppHeader toggle={toggle} collapsed={collapsed}/>
          </Header>
          <Content style={{background: '#f4f7fa'}}>
            {renderRoutes(routes)}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
