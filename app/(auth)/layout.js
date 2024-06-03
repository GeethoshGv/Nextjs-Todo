import React from 'react'
import './layout.scss'

const layout = ({ children }) => {
    return (
        <section className='auth_layout_section'>{children}</section>
    )
}

export default layout