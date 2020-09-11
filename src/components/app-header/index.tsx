import React, { memo, useEffect, useState } from 'react'

import { requestFullScreen, exitFullScreen } from '@/utils/fullScreen'

import { Dropdown, Menu, Input } from 'antd'

import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined'
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined'
import ExpandOutlined from '@ant-design/icons/ExpandOutlined'
import CompressOutlined from '@ant-design/icons/CompressOutlined'
import DownOutlined from '@ant-design/icons/DownOutlined'
import { AppHeaderWrapper } from './styled'

type IProps = {
    toggle: () => void,
    collapsed: boolean
}

const {Search} = Input

const menu = (
    <Menu>
        <Menu.Item>
            Action
        </Menu.Item>
    </Menu>
);

export default memo(function AppHeader(props: IProps) {
    const { toggle, collapsed } = props
    const [fullScreen, setFullScreen] = useState<boolean>(false)
    useEffect(() => {
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                setFullScreen(true)
            } else {
                setFullScreen(false)
            }
        })
    }, [])
    return (
        <AppHeaderWrapper>
            <div className='left'>
                <div className='toggle'>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </div>
                <div className='full-screen'>
                    {
                        fullScreen ? <CompressOutlined onClick={exitFullScreen} /> : <ExpandOutlined onClick={requestFullScreen} />
                    }
                </div>
                <div className='drop-down'>
                    <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
                        <span>
                            Dropdown&nbsp;<DownOutlined />
                        </span>
                    </Dropdown>,
                </div>
                <div className='search'>
                    <Search
                      placeholder="input search text"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                </div>
            </div>
        </AppHeaderWrapper>
    )
})
