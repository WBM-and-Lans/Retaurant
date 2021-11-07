import { Card, Col, Row, Avatar } from 'antd'
import './Menu.css'
import 'antd/dist/antd.css'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from '@ant-design/icons'

export default function Menu() {
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
                                cover={
                                    <img
                                        alt='example'
                                        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                    />
                                }
                                actions={[
                                    <SettingOutlined key='setting' />,
                                    <EditOutlined key='edit' />,
                                    <EllipsisOutlined key='ellipsis' />,
                                ]}
                            >
                                <Meta
                                    avatar={
                                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                                    }
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
