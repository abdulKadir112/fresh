import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, listItem , to}) => {
  return (
    <div>
        <li className={`${className}`}>
          <Link to={to} className='font-semibold md:text-lg text-black'>{listItem}</Link>
        </li>
    </div>
  )
}

export default Li