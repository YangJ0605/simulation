import React, { memo} from 'react'
import {Link, withRouter, RouteComponentProps} from 'react-router-dom'

import { routeMenu } from '@/router'

import { Menu } from 'antd'
import AppstoreOutlined from '@ant-design/icons/AppstoreAddOutlined'
import { AppSiderWrapper } from './style'

const { SubMenu } = Menu


interface IProps extends RouteComponentProps {
    collapsed: boolean
}

function AppSider(props: IProps) {
    const { collapsed, location: {pathname}} = props
    
    return (
        <AppSiderWrapper>
            <div className='header'>
                <AppstoreOutlined twoToneColor="#52c41a" className='logo' />
                {collapsed ? '' : (<span className='title'>Simulation</span>)}
            </div>
            <div className='menu'>
                <Menu mode='inline' 
                      defaultOpenKeys={['NAVIGATION', 'SERVICE']}
                      defaultSelectedKeys={[pathname]}
                      >
                    {
                        routeMenu.map(item => {
                            return (
                                <SubMenu key={item.title} title={item.title}>
                                    {
                                        item.children?.map(item2 => {
                                            return (
                                                <Menu.Item key={item2.path}>
                                                   <Link to={item2.path}>{item2.title}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </div>
        </AppSiderWrapper>
    )
}

export default withRouter(memo(AppSider))