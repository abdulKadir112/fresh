import React from 'react'
import Container from '../layer/Container'
import Slider from 'react-slick'
import Img from '../layer/Img'
import per1 from '../../public/footer/person1.jpg'
import per2 from '../../public/footer/person2.jpg'
import per3 from '../../public/footer/person3.jpg'
import per4 from '../../public/footer/person4.jpg'
import per5 from '../../public/footer/person5.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "90px",
    
  }


  return (
    <div className='footer bg-black'>
      <Container>
          <div className='relative'>
          <Slider {...settings}>
            <div>
              <Img src={per1} />
            </div>
            <div>
              <Img src={per2} />
            </div>
            <div>
              <Img src={per3} />
            </div>
            <div>
              <Img src={per4} />
            </div>
            <div>
              <Img src={per5} />
            </div>
          </Slider>
           <div className='w-52 md:w-full text-center absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <a className='font-common  font-bold text-[10px] md:text-[28px] text-black md:px-20 px-2 py-1 md:py-11 bg-white rounded-[10px]' href="#">Follow Our INSTAGRAM :@FRESH</a>
           </div>
          </div>
          <div className='pt-5 md:pt-32 bg-black'>
            <ul className='flex gap-3 md:gap-[60px] justify-center'>
              <li>
                <Link className='font-common font-medium md:font-bold text-[12px] md:text-2xl text-white'>Men</Link>
              </li>
              <li>
                <Link className='font-common font-medium md:font-bold text-[12px] md:text-2xl text-white'>Woman</Link>
              </li>
              <li>
                <Link className='font-common font-medium md:font-bold text-[12px] md:text-2xl text-white'>Kids</Link>
              </li>
              <li>
                <Link className='font-common font-medium md:font-bold text-[12px] md:text-2xl text-white'>Collection</Link>
              </li>
              <li>
                <Link className='font-common font-medium md:font-bold text-[12px] md:text-2xl text-white'>Trends</Link>
              </li>
            </ul>
          </div>
          <p className='font-common font-medium md:font-bold text-[12px] md:text-2xl text-white text-center py-5 md:py-28'>Copyright FRESH. All Right Reserved</p>
      </Container>
    </div>
  )
}

export default Footer