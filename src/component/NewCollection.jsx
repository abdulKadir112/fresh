import React from 'react'
import Container from '../layer/Container'
import NewCollectionProduct from '../layer/NewCollectionProduct'
import Slider from 'react-slick';
import p1 from '../../public/products/newCollection/p1.jpg'
import p2 from '../../public/products/newCollection/p2.jpg'
import p3 from '../../public/products/newCollection/p3.jpg'
import p4 from '../../public/products/newCollection/p4.jpg'
import p5 from '../../public/products/newCollection/p5.jpg'
import p6 from '../../public/products/newCollection/p6.jpg'
import Title from '../layer/Title';


const NewCollection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    
  };
  return (
    <div>
      <Container>
         <Title titleName={'New Collection'} className="text-center pt-4 md:pt-56" />
        <Slider {...settings}>
          <NewCollectionProduct src={p1} productName={'Sweater'} />
          <NewCollectionProduct src={p2} productName={'Jeans'} />
          <NewCollectionProduct src={p3} productName={'Baskets'} />
          <NewCollectionProduct src={p4} productName={'Shirt'} />
          <NewCollectionProduct src={p5} productName={'Shirt'} />
          <NewCollectionProduct src={p6} productName={'Bombers'} />
        </Slider>
      </Container>
    </div>
  )
}

export default NewCollection