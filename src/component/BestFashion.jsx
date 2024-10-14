import React from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'
import Title from '../layer/Title'
import bast from '../../public/bast.jpg'
import dot from '../../public/dot.png'

const BestFashion = () => {
    return (
        <div>
            <Container className="relative max-w-[1350px]">
                <div className='flex gap-3 md:gap-32 items-center md:pt-60 pb-24 md:pb-[371px]'>
                    <div className='w-full'>
                        <Img src={bast} />
                    </div>
                    <div>
                        <Title className={'md:w-[437px]'} titleName={'Best Fashion Since 2024'} />
                        <p className=' md:text-2xl text-[9px] font-semibold font-common text-black md:pt-16 w-52 md:w-[443px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                    </div>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 md:transform md:-translate-x-1/2  md:bottom-52 md:right-0 min-w-60 md:w-[793px] bg-[#FEECC8] md:rounded-[20px] -z-10'>
                        <div className='flex justify-between items-center py-5 px-3 md:py-[71px] md:px-10'>
                            <div className='border-r-2 pr-2 md:pr-7 border-black'>
                                <h2 className='font-Podkova font-bold text-lg md:text-6xl text-black'>2010</h2>
                                <p className='font-common font-medium text-[9px] md:text-[28px] text-black'>Founded</p>
                            </div>
                            <div className='border-r-2 pr-3 md:pr-11 border-black'>
                                <h2 className='font-Podkova font-bold text-lg md:text-6xl text-black'>5000+</h2>
                                <p className='font-common font-medium text-[9px] md:text-[28px] text-black'>Product Sold</p>
                            </div>
                            <div>
                                <h2 className='font-Podkova font-bold text-lg md:text-6xl text-black'>4500+</h2>
                                <p className='font-common font-medium text-[9px]   md:text-[28px] text-black'>Best Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-10 absolute top-44 left-[588px] -z-10">
                    <Img src={dot}/>
                    </div>
                    <div className="hidden md:block w-10 absolute bottom-4 left-[250px]">
                    <Img src={dot} />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default BestFashion