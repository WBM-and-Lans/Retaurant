import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './MainPage.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link, Outlet, Routes, Route } from 'react-router-dom'
import MenuFood from './MenuFood'
const { Header, Content, Footer } = Layout

export default function MainPage() {
    const navList = ['menu', 'my shopping list']
    return (
        <Layout className='layout'>
            <Header>
                <div className='logo' />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}
                >
                    {/* {new Array(2).fill(null).map((_, index) => {
                        const key = index + 1
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
                    })} */}
                    <Menu.Item>
                        <Link className='mealMenu' to='/mealmenu'>
                            Menu
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link className='cart' to='/cart'>
                            Cart
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                {/* <div className="site-layout-content">Content</div> */}
                {/* <Outlet /> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
}
