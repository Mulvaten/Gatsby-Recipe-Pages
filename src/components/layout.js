import * as React from 'react'
import { container } from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={container}>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout