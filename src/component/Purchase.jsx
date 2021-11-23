import 'antd/dist/antd.css'
import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'

export default function Purchase() {
    return (
        <Button icon={<ShoppingCartOutlined />} block={true}>
            purchase
        </Button>
    )
}
