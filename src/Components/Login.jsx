import React, { useState } from 'react';
import logo from '../assets/Web Portal.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

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

    const handleSignIn = () => {
        // Email and password validation
        if (!email) {
            toast.error('Email is required.');
            return;
        }
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        if (!password) {
            toast.error('Password is required.');
            return;
        }


        // If all validation passes, proceed with sign-in logic
        toast.success('Sign-in successful!');
    };
    const handleNavigate = () => {
        navigate(`/SignUp`);

    }


    return (
        <div className='flex w-full h-screen md:justify-center'>
            <div className="bg-[url('assets/loginImage.jpg')] bg-blend-multiply bg-[#483d8b] bg-cover bg-center h-screen w-[50%] bg-blend flex-col sm:hidden flex">
            </div>
            <div className='flex w-[50%] h-screen bg-[#090E25] justify-center items-center flex-col sm:items-center'>
                <div className='items-start px-6'>
                    <div className='self-center w-[250px] flex sm:w-[100px] sm:self-center md:self-center md:w-[150px]'>
                        <img src={logo} alt="" width={'100%'} height={'100%'} />
                    </div>
                    <h3 className='text-white font-bold text-3xl mt-3 text-left sm:text-sm'>Nice to see you!</h3>
                    <p className='text-white text-left text-lg mt-2 sm:text-sm'>Enter your email and password to sign in</p>
                    <div className='mt-7 gap-y-7 flex flex-col'>
                        <Input
                            type={"email"}
                            placeholder={'Your Email..'}
                            onChange={(e) => setEmail(e?.target?.value)}
                            value={email}
                            label={"Email"}
                        />

                        <Input
                            type={"password"}
                            placeholder={'Your password..'}
                            onChange={(e) => setPassword(e?.target?.value)}
                            value={password}
                            label={"Password"}
                        />
                        {/* Button */}
                        <div
                            className='w-[100%] bg-buttonbg p-2 self-center flex rounded-xl justify-center cursor-pointer'
                            onClick={handleSignIn}
                        >
                            <p className='text-white text-center text-base'>SIGN IN</p>
                        </div>
                        <p className='text-gray-400 font-medium text-center'>Don't have an account? <span className='text-white hover:underline cursor-pointer' onClick={handleNavigate}>Sign up</span></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
