import 'antd/dist/antd.css'
import { Modal, Button } from 'antd'
import { ProfileOutlined } from '@ant-design/icons'
import React from 'react'

export default function FoodDetail() {
    const [visible, setVisible] = React.useState(false)
    const [confirmLoading, setConfirmLoading] = React.useState(false)
    const [modalText, setModalText] = React.useState(
        'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis,[1] which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations'
    )

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        console.log('Clicked cancel button')
        setVisible(false)
    }

    return (
        <>
            <Button onClick={showModal} icon={<ProfileOutlined />} block={true}>
                profile
            </Button>
            <Modal
                title='Detail'
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    )
}
