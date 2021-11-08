import { Outlet, Link } from 'react-router-dom'
import MainPage from './component/MainPage'
import { Fragment } from 'react'
export default function App() {
    return (
        <Fragment>
            <MainPage></MainPage>
            <Outlet />
        </Fragment>
    )
}
