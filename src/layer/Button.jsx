import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className, button}) => {
  return (
    <div>
        <Link><button className={`bg-black md:font-semibold font-common text-[10px] font-medium px-4 py-1  md:text-2xl text-white md:px-4 md:py-2 rounded-[10px]  hover:bg-[#494949] duration-300 ${className}`}>{button}</button></Link>
    </div>
  )
}

export default Button