import { useState } from 'react';
import { useNavigate } from "react-router";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './index.css';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;


export default function SideMenu() {

    const [collapsed] = useState(false);
    const items = [
        {
            key: '/dashboard',
            icon: <UserOutlined />,
            label: '首页',
        },
        {
            key: '/dashboard/user-manage',
            icon: <VideoCameraOutlined />,
            label: '用户管理',
            children: [
                {
                    key: '/dashboard/user-manage/UserList',
                    label: '用户列表',
                }
            ],
        },
        {
            key: '/dashboard/right-manage',
            icon: <UploadOutlined />,
            label: '权限管理',
            children: [
                {
                    key: '/dashboard/right-manage/RoleList',
                    label: '角色列表',
                },
                {
                    key: '/dashboard/right-manage/RightList',
                    label: '权限列表',
                }
            ],
        }
    ]
    let navigate = useNavigate();
    const onClick = (e) => {
        // console.log('click ', e);
        navigate(e.key);
    };
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">后台管理系统</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['dashboard']}
                defaultOpenKeys={['dashboard']}
                items={items}
                // redirect()做路由切换
                // https://reactrouter.com/start/framework/navigating#redirect
                // 但是：
                // That only works on loaders, client loaders, actions, and client actions
                // You need useNavigate hook to get the navigate function
                // 所以这里用 useNavigate() hook 更好
                onClick={onClick}
            />
        </Sider>
    )
}