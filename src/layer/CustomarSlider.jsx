import React from 'react'
import Img from './Img'

const CustomarSlider = ({className , src , personName}) => {
    return (
            <div className={`bg-[#FEECC8]  mx-1.5 md:mx-7 px-2 md:px-7 ${className}`}>
                <h3 className='w-full font-common font-medium md:font-bold text-[9px] md:text-lg text-black text-center pt-2 md:pt-9'>Comfortable And Meet All My Expectation !</h3>
                <p className='w-full font-common font-normal text-[8px] md:text-lg text-black pt-1 md:pt-3 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </p>
                <div className='flex flex-col items-center'>
                    <div className=''>
                        <Img className={'w-7 md:w-full'} src={src} />
                    </div>
                    <div className='flex flex-col pb-1 md:pb-4'>
                        <h2 className='text-[10px] md:text-base text-center'>{personName}</h2>
                        <p className='text-[8px] md:text-sm text-center font-common font-normal'>Customer</p>
                    </div>
                </div>
            </div>
        
    )
}

export default CustomarSlider