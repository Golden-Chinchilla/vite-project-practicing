import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SmileOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Button, Layout, theme, Dropdown, Space, Avatar } from 'antd';
const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken()
    const items = [
        {
            key: '1',
            label: (111111),
        },
        {
            key: '2',
            label: (222222),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (3333333),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ]

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
            }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />

            <div style={{ marginLeft: 'auto', marginRight: '16px' }}>欢迎 Admin 回来</div>

            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Avatar icon={<UserOutlined />} style={{ marginRight: '16px' }} />
                    </Space>
                </a>
            </Dropdown>
        </Header>
    )
}
