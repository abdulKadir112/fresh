import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

const RootLayOut = () => {
  return (
    <div>
     <Outlet/>
    </div>
  )
}

export default RootLayOut