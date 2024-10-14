import React from 'react'
import Img from './Img'
import p1 from '../../public/products/newCollection/p1.jpg'
const NewCollectionProduct = ({productName , src}) => {
  return (
    <div className='relative w-24 h-32 md:w-[349px] md:h-[402px] rounded-[20px] mx-2 bg-slate-600 my-4 md:my-20'>
        <img src={src} className="w-full h-full"/>
        <div className='absolute bottom-3 md:bottom-11 text-center py-1 px-5 md:py-3 md:px-28 left-1/2 transform -translate-x-1/2 bg-white rounded-[20px]'>
            <h1 className='text-[10px] md:text-2xl font-normal font-common text-black'>{productName}</h1>
        </div>
    </div>
  )
}

export default NewCollectionProduct