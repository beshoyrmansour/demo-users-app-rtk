import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {

}

const HomeLayout = (props: Props) => {
    return (
        <div className="container home-layout-container">
            <Outlet />
        </div>
    )
}

export default HomeLayout
