import React from 'react'
import { Link } from 'react-router-dom'

const OurProductNavebar = ({className}) => {
  return (
    <div>
        <ul className={`flex gap-3 md:gap-[60px] justify-center pt-3 md:pt-0 ${className}`}>
            <li>
                <Link className='relative font-common font-bold text-[12px] md:text-2xl text-black after:absolute  after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-black after:content-[""] after:hover:w-full after:transition-all after:duration-300'>HOT</Link>
            </li>
            <li>
                <Link className='relative font-common font-bold text-[12px] md:text-2xl text-black after:absolute  after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-black after:content-[""] after:hover:w-full after:transition-all after:duration-300'>ON SALE</Link>
            </li>
            <li>
                <Link className='relative font-common font-bold text-[12px] md:text-2xl text-black after:absolute  after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-black after:content-[""] after:hover:w-full after:transition-all after:duration-300'>TRENDING NOW</Link>
            </li>
            <li>
                <Link className='relative font-common font-bold text-[12px] md:text-2xl text-black after:absolute  after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-black after:content-[""] after:hover:w-full after:transition-all after:duration-300'>NEW ARRIVAL</Link>
            </li>
        </ul>
    </div>
  )
}

export default OurProductNavebar