import { Card, Col, Row, Avatar, Button } from 'antd'
import './MenuFood.css'
import 'antd/dist/antd.css'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import cardcover from '../assets/images/orange.jpg'
import random from '../assets/images/random.svg'
import FoodDetail from './FoodDetail'
import Purchase from './Purchase'

export default function MenuFood() {
    const { Meta } = Card
    return (
        <div className='site-card-wrapper'>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {new Array(15).fill(null).map((_, index) => {
                    const key = index + 1
                    return (
                        <Col span={6}>
                            <Card
                                // style={{ width: 300 }}
                                cover={<img alt='example' src={cardcover} />}
                                actions={[
                                    // <SettingOutlined key='setting' />,
                                    // <EditOutlined key='edit' />,
                                    // <EllipsisOutlined key='ellipsis' />,

                                    <FoodDetail />,
                                    <Purchase />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={random} />}
                                    title='Fruit Orange'
                                    description='Price: 999$'
                                />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
