import { Card, Col, Row, Space } from 'antd'
import './Menu.css'
import 'antd/dist/antd.css'

export default function Menu() {
    return (
        <div className='site-card-wrapper'>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span={6}>
                    <Card title='Card title' bordered={true}>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title='Card title' bordered={true}>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title='Card title' bordered={true}>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title='Card title' bordered={true}>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title='Card title' bordered={true}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
