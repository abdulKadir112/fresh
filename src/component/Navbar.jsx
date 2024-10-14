import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../layer/Container'
import Li from '../layer/Li'
import { IoReorderThree } from 'react-icons/io5'

const Navbar = () => {

  const [show , setShow] = useState(true)

 useEffect(()=>{
  function size(){
    if(window.innerWidth > 768){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  size()
 },[])

  return (
    <div className='bg-[#FAE3B6]'>
      <Container className='relative flex justify-between items-center pt-5 md:pt-5 md:p-5'>
      <Link className='md:text-5xl text-2xl font-semibold font-common text-black' to='/'>Fresh</Link>
   <div className={`absolute h-60 md:h-0 top-full md:top-0 md:static md:flex items-center gap-[237px] bg-orange-200 md:bg-transparent py-5 md:py-0 px-4 pl-5 md:px-0 rounded-l-[10px] transition-all duration-300 ${show ? 'opacity-0 invisible right-full ' : 'opacity-100 visible right-0'}`}>
   <ul className='flex flex-col gap-1 md:flex md:flex-row md:gap-[60px]'>
        <Li listItem='Men'/>
        <Li to={"/product"} listItem='Woman'/>
        <Li listItem='Kids'/>
        <Li listItem='Collection'/>
        <Li listItem='Trends'/>
      </ul>
      <div className='flex gap-2 md:gap-2.5 pt-11 md:pt-0'>
        <Link className='font-semibold font-common text-sm md:text-2xl text-black border border-[#FDBB57] px-2 py-1 md:px-4 md:py-2 rounded-[10px] hover:bg-[#FDBB57] duration-300'>Login</Link>
        <Link to='/sign/up' className='font-semibold text-sm font-common md:text-2xl text-black bg-[#FDBB57] px-2 py-1 md:px-4 md:py-2 rounded-[10px] border border-[#FDBB57] hover:bg-transparent duration-300'>Sign up</Link>
      </div>
   </div>
      <div onClick={() => setShow(!show)} className='cursor-pointer absolute right-3 md:hidden'>
      <IoReorderThree className='text-3xl'  />
      </div>
      </Container>
    </div>
  )
}

export default Navbar