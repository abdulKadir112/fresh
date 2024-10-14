import React from 'react'
import Container from '../layer/Container'
import Button from '../layer/Button'
import Img from '../layer/Img'
import banner1 from '../../public/bannerImg/banner1.png'
const Banner = () => {
    return (
        <div className='bg-[#FAE3B6]'>
            <Container className="max-w-[1440px] pt-5 md:pt-0">
                <div className='flex md:justify-between gap-4 md:gap-0 items-center'>
                    <div>
                        <h1 className=' md:text-[64px] font-semibold font-common text-black max-w-[557px]'>Find The Best Fashion Style
                            For You</h1>
                        <p className='text-[10px] md:text-2xl font-normal font-common text-black max-w-[531px] pb-3 md:pt-9 md:pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                        <Button button={'Shop Now'} />
                    </div>
                    <div className='md:pt-40 md:pb-24 pb-8'>
                        <Img src={banner1} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner