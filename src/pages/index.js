import React, { useState } from 'react'
import Burger from '../components/Burger'
import Menu from '../components/Menu'

//styles
import '../global.scss'

const Home = () => {
  const [open, setOpen] = useState(false);  
  return (
    <>
      <div>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
      <div>
        <h1>hey whats up
        </h1>
      </div>
    </>
  )
}

export default Home
