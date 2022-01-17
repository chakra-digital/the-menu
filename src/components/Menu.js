import React from 'react'
import { Link } from 'gatsby'

// styles
import '../components/menu.scss'

const Menu = ({ open }) => {
    return (
        <nav open={open}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Menu
