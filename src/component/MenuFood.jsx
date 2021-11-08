import { Card, Col, Row, Avatar } from 'antd'
import './MenuFood.css'
import 'antd/dist/antd.css'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import cardcover from '../assets/images/cardcover.png'
import random from '../assets/images/random.svg'
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
                                    <SettingOutlined key='setting' />,
                                    <EditOutlined key='edit' />,
                                    <EllipsisOutlined key='ellipsis' />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={random} />}
                                    title='Card title'
                                    description='This is the description'
                                />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
