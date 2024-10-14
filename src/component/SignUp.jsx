import React, { useState } from 'react'
import Container from '../layer/Container'
import Title from '../layer/Title'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Img from '../layer/Img'
import sign from '../../public/signup.jpg'
import { BsEmojiAngryFill } from 'react-icons/bs'
import { FaRegFaceSadCry } from 'react-icons/fa6'

const SignUp = () => {

    const [show , setShow] = useState(true)
    const [showtwo , setShowtwo] = useState(true)


    const [fullName , setFullName] = useState()
    const [fullNameError, setFullNameError] = useState(true)

    let manageFullNane = (e) => {
        let fName = e.target.value
        setFullName(fName)
        setFullNameError("")
    }

    const [email , setEmail] = useState()
    const [emailError , setEmailError] = useState(true)


    let manageEmail = (e) => {
        let emailaddress = e.target.value
        setEmail(emailaddress)
        setEmailError("")
    }

    const [password , setPassword] = useState()
    const [passwordError , setPasswordError] = useState(true)

    let managePassword = (e) => {
        let password = e.target.value
        setPassword(password)
        setPasswordError("")
    }

    const [checkBox , setCheckBox] = useState(false)
    const [checkBoxError , setCheckBoxError] = useState(true)


    let mangeCheckBox = (e) => {
        let check = e.target.checked
        setCheckBox(check)
        setCheckBoxError("")
    }
    
    let manegeSubmit = () => {
        if (!fullName) {
            setFullNameError("full name is required")
        }
        if (!email) {
            setEmailError("email is required")
        }
        if (!password) {
            setPasswordError("password is required")
        }
        if (!checkBox) {
            setCheckBoxError("checkbox is required")
        }
    }

    return (
        <div className='bg-[#FAE3B6]'>
            <Container className={"flex py-16 h-svh md:h-auto md:py-28"}>
                <div className='max-w-full md:w-[822px] bg-white rounded-lg md:rounded-[0] md:rounded-l-[20px] px-1 md:px-20'>
                    <Title titleName={'Get Started'} className={"text-center pt-2 md:pt-0"} />
                    <div className='flex gap-1 md:gap-2 justify-center pt-1 md:pt-6'>
                        <h3 className='font-sub font-medium text-sm md:text-2xl text-[#868686]'>Already have an account?</h3>
                        <Link className='font-sub font-medium text-sm md:text-2xl text-[#F59C15]'>Log in</Link>
                    </div>
                    <div className='flex items-center justify-center  md:pt-6'>
                        <div className='w-32 md:w-56 h-0.5 bg-[#C4C4C4]'></div>
                        <div><p className='font-sub font-medium text-sm md:text-2xl text-black px-2 md:px-8'>OR</p></div>
                        <div className='w-32 md:w-56 h-0.5 bg-[#C4C4C4]'></div>
                    </div>
                    <div className='flex justify-center pt-3 md:pt-10 pb-5 md:pb-14 gap-2 md:gap-4'>
                        <div className='px-2 md:px-3 py-2 md:py-3 bg-slate-200 rounded-[20px]'>
                            <div className='flex items-center gap-1 md:gap-3'>
                                <FcGoogle className='text-xl md:text-4xl' />
                                <Link className='font-sub font-medium text-[12px] md:text-2xl text-black'>Sign up with Google</Link>
                            </div>
                        </div>
                        <div className='px-2 md:px-3 py-2 md:py-3 bg-slate-200 rounded-[20px]'>
                            <div className='flex items-center gap-1 md:gap-3'>
                                <FaFacebook className='text-xl text-blue-600 md:text-4xl' />
                                <Link className='font-sub font-medium text-[12px] md:text-2xl text-black'>Sign up with Facebook</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex flex-col gap-3 px-3 md:px-0 md:gap-9'>
                        <div className='relative'>
                            <label className='font-sub font-medium text-sm md:text-2xl text-[#868686]' htmlFor="">Full name</label>
                            <input onChange={manageFullNane} value={fullName} type="text" className='w-full h-8 md:h-14 border border-[#C4C4C4] rounded-[20px] px-4 py-3 font-common outline-none text-sm md:text-xl text-black' />
                            <p className='absolute left-3 text-[10px] md:text-base text-red-500'>{fullNameError}</p>
                        </div>
                        <div className='relative'>
                            <label className='font-sub font-medium text-sm md:text-2xl text-[#868686]' htmlFor="">Email Adress</label>
                            <input onChange={manageEmail} value={email} type="email" className='w-full h-8 md:h-14 border border-[#C4C4C4] rounded-[20px] px-4 py-3 font-common outline-none md:text-xl text-black' />
                            <p className='absolute left-3 text-[10px] md:text-base text-red-500'>{emailError}</p>
                        </div>
                        <div>
                            <label className='font-sub font-medium text-sm md:text-2xl text-[#868686]' htmlFor="">Password</label>
                             <div className='relative'>
                             <input onChange={managePassword} value={password} type={show ? "password" : "text"} className='w-full h-8 md:h-14 border border-[#C4C4C4] rounded-[20px] pl-4 pr-16 py-3 font-common outline-none text-sm md:text-xl text-black' />
                            <p className='absolute left-3 text-[10px] md:text-base text-red-500'>{passwordError}</p>
                            <BsEmojiAngryFill onClick={() => setShow(!show)} className={`absolute right-5 text-slate-500 top-1/2 -translate-y-1/2 text-xl ${show? "hidden" : "block"}`} />
                            <FaRegFaceSadCry onClick={() => setShow(!show)} className={`absolute right-5 text-slate-500 top-1/2 -translate-y-1/2 text-xl ${show? "block" : "hidden"}`} />
                             </div>
                        </div>
                    </div>
                    <div className='relative flex justify-center gap-2 md:gap-4 pt-6'>
                        <input onChange={mangeCheckBox} checked={checkBox} className='md:w-6 w-3 h-3 md:h-6' type="checkbox" />
                        <div>
                            <p className='font-sub font-medium text-[10px] md:text-2xl text-[#868686]'>I agree to all the  <span><Link className='font-sub font-medium text-[10px] md:text-2xl text-[#F59C15]'>Terms</Link></span>,  <span>and</span> <span><Link className='font-sub font-medium text-[10px] md:text-2xl text-[#F59C15]'>Privacy Policy</Link></span> <span>and</span> <span><Link className='font-sub font-medium text-[10px] md:text-2xl text-[#F59C15]'>Fees</Link></span>
                            </p>
                        </div>
                        <p className='absolute -bottom-5 text-[10px] mdtext-base left-20 text-red-500'>{checkBoxError}</p>
                    </div>
                    <div className='flex justify-center py-8 md:py-20'>
                        <button onClick={manegeSubmit} className='bg-[#FAE3B6] font-medium font-sub text-sm md:text-2xl text-black px-20 md:px-32 md:py-4 py-2 rounded-[10px]  '>Create Account</button>
                    </div>
                </div>
                <div className='relative w-[618px] hidden md:block'>
                    <Img src={sign} className={"rounded-r-[20px]"}/>
                    <Link to={'/'} className='absolute top-8 right-8 font-common font-semibold text-5xl text-white'>Fresh</Link>
                </div>
            </Container>
        </div>
    )
}

export default SignUp