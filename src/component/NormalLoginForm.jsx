import 'antd/dist/antd.css'
import './NormalLoginForm.css'
import { Form, Input, Button, Checkbox, Row } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
        getData(url3)
            .then(
                (res) => {
                    console.log('success', res)
                },
                (err) => {
                    console.log('fail', err)
                }
            )
            .catch((e) => {
                console.log(e)
            })
    }

    const url1 = 'http://127.0.0.1:8000/api/login/'
    const url2 = 'http://ec2-18-212-36-192.compute-1.amazonaws.com/login'
    const url3 = 'http://127.0.0.1:8000/api/hello-view/'
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: undefined,
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        return response.json() // parses JSON response into native JavaScript objects
    }

    async function getData(url = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
        return response.json() // parses JSON response into native JavaScript objects
    }

    return (
        <Row type='felx' justify='center'>
            <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                    remember: true,
                }}
                size='large'
                onFinish={onFinish}
            >
                <Form.Item
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className='site-form-item-icon' />
                        }
                        placeholder='Username'
                    />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className='site-form-item-icon' />
                        }
                        type='password'
                        placeholder='Password'
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className='login-form-forgot' href='/'>
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                    >
                        Log in
                    </Button>
                    Or <a href='/'>register now!</a>
                </Form.Item>
            </Form>
        </Row>
    )
}

export default NormalLoginForm
