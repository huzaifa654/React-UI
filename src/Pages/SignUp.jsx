import React from 'react'
import logo from '../assets/Web Portal.png';
import { BsCamera, BsCameraFill } from 'react-icons/bs';
import Input from '../Components/Input';

const SignUp = () => {
    return (
        <div className='flex w-full h-screen md:justify-center overflow-scroll'>
            <div className="bg-[url('assets/loginImage.jpg')] bg-blend-multiply bg-[#483d8b] bg-cover bg-center h-screen w-[50%] bg-blend flex-col sm:hidden flex">
            </div>
            <div className='flex w-[50%] h-screen bg-[#090E25] justify-center items-center flex-col sm:items-center'>
                <div className='flex flex-col px-2 items-center'>
                    <div className='w-[250px] self-center'>
                        <img src={logo} alt="" width={'100%'} height={'100%'} />
                    </div>
                    <p className='text-white text-center  text-lg mt-3'>Enter your details to sign up</p>
                    <div className='grid  items-center mt-3 gap-2'>
                      <div className='bg-blue-600 w-[120px] h-[120px] flex  justify-center rounded-full'>
                       <BsCameraFill  className='text-white self-center w-[40px] h-[40px] text-center'/>
                      </div>
                     <Input
                        label={"Sign Up As"}
                        section={true}

                     />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp