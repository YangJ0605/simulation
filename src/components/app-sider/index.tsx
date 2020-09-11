import React, { memo } from 'react'

import { routeMenu } from '@/router'

import { Menu } from 'antd'
import AppstoreOutlined from '@ant-design/icons/AppstoreAddOutlined'
import { AppSiderWrapper } from './style'

const { SubMenu } = Menu

type IProps = {
    collapsed: boolean
}

export default memo(function AppSider(props: IProps) {
    const { collapsed } = props
    return (
        <AppSiderWrapper>
            <div className='header'>
                <AppstoreOutlined twoToneColor="#52c41a" className='logo' />
                {collapsed ? '' : (<span className='title'>Simulation</span>)}
            </div>
            <div className='menu'>
                <Menu mode='inline'>
                    {
                        routeMenu.map(item => {
                            return (
                                <SubMenu key={item.title} title={item.title}>
                                    {
                                        item.children?.map(item2 => {
                                            return (
                                                <Menu.Item key={item2.title}>
                                                    {item2.title}
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
})
