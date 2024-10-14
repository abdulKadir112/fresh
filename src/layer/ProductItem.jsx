import React from 'react'
import Img from './Img'
import { IoMdStar } from 'react-icons/io'

const ProductItem = ({className , src , titleName , mainPrice , disPrice , classNameImg}) => {
  return (
    <div className={`${className}`}>
        <div>
            <Img className={`w-full ${classNameImg}`} src={src} />
        </div>
        <div className='md:pt-3 md:pl-5 pt-2'>
            <div className='flex md:gap-2 md:text-2xl text-[12px] text-[#FFAF37]'>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            </div>
            <h2 className='font-common font-semibold text-black text-[10px] md:text-[22px] md:pt-3'>{titleName}</h2>
            <div className='flex gap-2 md:gap-5'>
                <p className='font-common font-normal text-[8px] md:text-2xl text-[#C4C4C4] line-through'> $ {mainPrice}</p>
                <p className='font-common font-normal text-[8px] md:text-2xl text-black'> $ {disPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItem