import React from 'react'


//styles
import '../components/burger.scss'


const Burger = ({ open, setOpen }) => {
    return (
        <button open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </button>
    )
}

export default Burger
