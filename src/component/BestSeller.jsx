import React from 'react'
import Container from '../layer/Container'
import Title from '../layer/Title'
import { Link } from 'react-router-dom'
import ProductItem from '../layer/ProductItem'
import Slider from 'react-slick'
import p1 from '../../public/products/bestSeller/p1.jpg'
import p3 from '../../public/products/bestSeller/p3.jpg'
import p4 from '../../public/products/bestSeller/p4.jpg'
import p2 from '../../public/products/bestSeller/p2 (2).jpg'

const BestSeller = () => {

        const settings = {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
        };
    
    return (
        <div>
            <Container className={'max-w-[1320px] flex gap-2 md:justify-between items-center md:pb-48 py-5 md:py-5'}>
                <div>
                    <div className='bg-gradient-to-t from-[#FAE3B6] w-28 md:w-[463px]'>
                        <Title className="md:w-[437px] text-[10px]" titleName={'Best Seller Product'} />
                        <p className='md:text-2xl text-[8px] font-bold font-sub text-black p-2 md:p-4 md:w-[443px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
                    </div>
                    <div className='md:pt-20 pt-6'>
                        <Link className='md:px-20 p-2 md:py-4 bg-black text-white font-common text-[10px] md:text-2xl font-semibold rounded-[10px] hover:bg-[#494949] duration-300'>Learn MORE</Link>
                    </div>
                </div>
                <div className='w-52 md:w-[750px]'>
                    <Slider {...settings}>
                      <ProductItem className={'rounded-t-[20px] mr-4'} src={p1} titleName={'Fancy Product'} mainPrice={'$40.00'} disPrice={'$20.00'}/>
                      <ProductItem className={'rounded-t-[20px] mr-4'} src={p2} titleName={'Fancy Product'} mainPrice={'$40.00'} disPrice={'$20.00'}/>
                      <ProductItem className={'rounded-t-[20px] mr-4'} src={p3} titleName={'Fancy Product'} mainPrice={'$40.00'} disPrice={'$20.00'}/>
                      <ProductItem className={'rounded-t-[20px] mr-4'} src={p4} titleName={'Fancy Product'} mainPrice={'$40.00'} disPrice={'$20.00'}/>
                     </Slider>    
                </div>
            </Container>
        </div>
    )
}

export default BestSeller