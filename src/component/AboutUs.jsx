import React, { useEffect, useState } from 'react'
import Container from '../layer/Container'
import Title from '../layer/Title'
import Slider from 'react-slick';
import per1 from '../../public/per1.png'
import per2 from '../../public/per2.png'
import CustomarSlider from '../layer/CustomarSlider';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-full right-6  w-5 h-5 border-[.5px] border-slate-500 rounded-full bg-transparent justify-center items-center"
      style={{ ...style, display: "flex", }}
      onClick={onClick}
      >
        <FaLongArrowAltLeft className='text-[12px] text-slate-500' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute top-full  right-0 w-5 h-5 border-[.5px] border-slate-500 rounded-full bg-transparent justify-center items-center z-10'
      style={{ ...style, display: "flex", }}
      onClick={onClick}
      >
        <FaLongArrowAltRight className='text-[12px] text-slate-500' />
      </div>
   
  );
}


const AboutUs = () => {

  const [centerPadding, setCenterPadding] = useState();
  const [dots, setDots] = useState();
  const [arrows, setArrows] = useState();

  useEffect(()=>{
    function size(){
      if(window.innerWidth > 768){
        setCenterPadding("160px")
      }else{
        setCenterPadding("30px")
      }
      if(window.innerWidth > 768){
          setDots(true)
      }else{
          setDots(false)
      }
      if(window.innerWidth > 768){
          setArrows(false)
      }else{
        setArrows(true)
      }
    }
    size()
  },[])

  const [active, setActive] = useState(0);

    const settings = {
        dots: dots,
        arrows: arrows,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: centerPadding,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,

        beforeChange: (item, index) => (
          setActive(index)
        ),
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                

              }}
            >
              <ul style={{ 
                margin: "0px", 
                display: "flex",
                columnGap: "8px",
                }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={` ${i==active ? "bg-[#000000] text-transparent" : "text-transparent"}`}
              style={{
                width: "17px",
                height: "17px",
                border: "2px black solid",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
              }}
              
            >
              {i+1}
            </div>
          ),
    };

    return (
        <div>
            <Container className={"max-w-[1460px] py-5 md:py-32"}>
                <div className='md:pb-7 pb-5'>
                    <Title titleName={"What People Say About Us"} className="text-center" />
                    <p className='font-common font-normal text-[10px] md:text-xl text-black text-center pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam.</p>
                </div>

               

                <Slider {...settings}>
                    <CustomarSlider src={per1} personName={'John Doe'}/>
                    <CustomarSlider src={per2} personName={'Alexandra Dario'}/>
                    <CustomarSlider src={per1} personName={'John Doe'}/>
                    <CustomarSlider src={per2} personName={'Alexandra Dario'}/>
                    <CustomarSlider src={per1} personName={'John Doe'}/>
                </Slider>

            </Container>
        </div>
    )
}

export default AboutUs