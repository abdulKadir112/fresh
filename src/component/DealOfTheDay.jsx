import React, { useEffect, useRef, useState } from 'react'
import Container from '../layer/Container'
import Title from '../layer/Title'
import { Link } from 'react-router-dom'
import deal from '../../public/deal.jpg'
import dot2 from '../../public/dot2.png'
import Img from '../layer/Img'

const DealOfTheDay = () => {

    const [day, setDay] = useState("00");
    const [hour, setHour] = useState("00");
    const [min, setMin] = useState("00");
    const [sec, setSec] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('october 25, 2024 00:00:00').getTime(); // Updated to future date
        
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const sec = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDay(day < 10 ? `0${day}` : day);
                setHour(hour < 10 ? `0${hour}` : hour);
                setMin(min < 10 ? `0${min}` : min);
                setSec(sec < 10 ? `0${sec}` : sec);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);


    return (
        <div className='bg-[#FAE3B6] '>
            <Container className={'relative max-w-[1320px] md:flex justify-between items-center'}>
              <div className='md:pt-28 pt-4'>
              <Title titleName={'Deal Of The Day'} className={'w-570px'} />
                <p className='w-60 md:w-[569px] font-sub font-bold text-[12px] md:text-2xl text-black md:pt-8 md:pb-16 py-3 md:py-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis.</p>
                <div className='absolute md:static bottom-12 flex gap-3 md:gap-7 items-center'>
                    <div className='w-10 h-10 md:w-24 md:h-24 bg-white flex flex-col md:gap-3 justify-center items-center'>
                        <h2 className='font-bold font-common text-black text-sm md:text-[40px]'>{day}</h2>
                        <p className='font-common font-normal text-[10px] md:text-sm text-black'>Day</p>
                    </div>
                    <div className='w-10 h-10 md:w-24 md:h-24 bg-white flex flex-col md:gap-3 justify-center items-center'>
                        <h2 className='font-bold font-common text-black text-sm md:text-[40px]'>{hour}</h2>
                        <p className='font-common font-normal text-[10px] md:text-sm text-black'>Hour</p>
                    </div>
                    <div className='w-10 h-10 md:w-24 md:h-24 bg-white flex flex-col md:gap-3 justify-center items-center'>
                        <h2 className='font-bold font-common text-black text-sm md:text-[40px]'>{min}</h2>
                        <p className='font-common font-normal text-[10px] md:text-sm text-black'>Minute</p>
                    </div>
                    <div className='w-10 h-10 md:w-24 md:h-24 bg-white flex flex-col md:gap-3 justify-center items-center'>
                        <h2 className='font-bold font-common text-black text-sm md:text-[40px]'>{sec}</h2>
                        <p className='font-common font-normal text-[10px] md:text-sm text-black'>Second</p>
                    </div>
                </div>
                <div className='md:pt-20 md:pb-10 py-4 absolute md:static bottom-0 left-4 md:py-0'>
                    <Link className="md:px-20 md:py-6 py-1.5 px-3 bg-black font-common font-semibold text-[12px] md:text-2xl text-white rounded-md md:rounded-[10px]">SHOP NOW</Link>
                </div>
              </div>
              <div className='relative w-48 md:w-[436px]  md:pt-0 pb-24 md:h-[532px] z-20'>
              <Img className={'w-full h-full rounded-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-slate-[20px] '} src={deal} />
              <Img className={'hidden md:block absolute -bottom-[50px] -left-12 w-[100px] h-[100px] -z-10 '} src={dot2} />
              </div>
            </Container>
        </div>
    )
}

export default DealOfTheDay