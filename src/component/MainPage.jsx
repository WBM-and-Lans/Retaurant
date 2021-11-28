import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './MainPage.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link, Outlet, Routes, Route } from 'react-router-dom'
import { ShoppingCartOutlined, CoffeeOutlined } from '@ant-design/icons'
import { Badge, Avatar } from 'antd'
const { Header, Content, Footer } = Layout

export default function MainPage() {
    const navList = ['menu', 'my shopping list']
    return (
        <Layout className='layout'>
            <Header>
                <div className='logo'>
                    <div className='logocontent'>Rest</div>
                </div>

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
                            <Avatar
                                // size={{
                                //     xs: 24,
                                //     sm: 32,
                                //     md: 40,
                                //     lg: 64,
                                //     xl: 80,
                                //     xxl: 100,
                                // }}
                                size='large'
                                shape='square'
                                style={{
                                    color: '#eab676',
                                    backgroundColor: '#141414',
                                }}
                                // color='#102231'
                                icon={
                                    <CoffeeOutlined
                                        style={{
                                            color: '#eab676',
                                        }}
                                    />
                                }
                            />
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link className='cart' to='/cart'>
                            <Badge count={5}>
                                <Avatar
                                    // size={{
                                    //     xs: 24,
                                    //     sm: 32,
                                    //     md: 40,
                                    //     lg: 64,
                                    //     xl: 80,
                                    //     xxl: 100,
                                    // }}
                                    size='large'
                                    shape='square'
                                    style={{
                                        color: '#eab676',
                                        backgroundColor: '#141414',
                                    }}
                                    // color='#102231'
                                    icon={
                                        <ShoppingCartOutlined
                                            style={{
                                                color: '#eab676',
                                            }}
                                        />
                                    }
                                />
                            </Badge>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Avatar
                            size='large'
                            shape='square'
                            style={{
                                color: '#eab676',
                                backgroundColor: '#141414',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}

                {/* <div className="site-layout-content">Content</div> */}
                {/* <Outlet /> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
}
