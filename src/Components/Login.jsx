import React, { useState } from 'react'
import logo from '../assets/Web Portal.png'
import { toast } from 'react-toastify';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const validateEmail = (email) => {
        // Basic email validation pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Example password validation: Minimum 8 characters, with uppercase, lowercase, and a number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handlePassword = (e) => {
        const value = e?.target?.value;
        setPassword(value);

        // Password validation
        if (!validatePassword(value)) {
            toast.error('Password must be at least 8 characters long and include uppercase, lowercase, and a number.');
        }
    };

    const handleEmail = (e) => {
        const value = e?.target?.value;
        setEmail(value);

        // Email validation
        if (!validateEmail(value)) {
            toast.error('Please enter a valid email address.');
        }
    };
    return (
        <div className='flex w-full h-screen md:justify-center'>
            <div class="bg-[url('assets/loginImage.jpg')] bg-blend-multiply bg-[#483d8b]  bg-cover bg-center h-screen w-[50%] bg-blend flex-col sm:hidden flex">
            </div>
            <div className='flex w-[50%] h-screen bg-[#090E25] justify-center items-center flex-col sm:items-center'>
                <div className='items-start px-6'>
                    <div className='self-center w-[250px] flex sm:w-[100px] sm:self-center md:self-center md:w-[150px]'>
                        <img src={logo} alt="" width={'100%'} height={'100%'} />
                    </div>
                    <h3 className='text-white font-bold text-3xl mt-3 text-left sm:text-sm'>Nice to see you!</h3>
                    <p className='text-white text-left  text-lg mt-2 sm:text-sm'>Enter your email and password to sign in</p>
                    <div className='mt-7 gap-y-7 flex flex-col'>
                        <div className='flex-col flex'>
                            <label className='text-white text-left font-medium text-lg  ml-[7px] mb-2 sm:text-sm'> Email</label>
                            <input
                                type="email"
                                placeholder='Your Email..'
                                onChange={(e) => handleEmail(e)}
                                value={email}
                                className='border-[1px]  bg-[#0F1535] focus:bg-[#0F1535] outline-none rounded-2xl p-2  border-primary text-white sm:text-sm'
                            />
                        </div>

                        <div className='flex-col flex'>
                            <label className='text-white text-left font-medium text-lg  ml-[7px] mb-2'>Password</label>
                            <input
                                type="Password"
                                placeholder='Your password..'
                                onChange={(e) => handlePassword(e)}
                                value={password}
                                className='border-[1px]  bg-[#0F1535] focus:bg-[#0F1535] outline-none rounded-2xl p-2  border-primary text-white'
                            />
                        </div>
                        {/* Buuton */}
                        <div className='w-[100%] bg-buttonbg p-2 self-center flex rounded-xl justify-center cursor-pointer'>
                            <p className='text-white text-center  text-base'>SIGN IN</p>
                        </div>
                        <p className='text-gray-400 font-medium text-center '>Don't have an account? <span className='text-white'>Sign up</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login