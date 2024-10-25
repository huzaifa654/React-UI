import React from 'react'

const Input = ({ type, placeholder, onChange, value, label, section }) => {
    return (
        <div className='flex-col flex'>
            {label && <label className='text-white text-left font-medium text-lg ml-[7px] mb-2 sm:text-sm'>{label}</label>}

            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className='border-[1px] bg-[#0F1535] focus:bg-[#0F1535] outline-none rounded-2xl p-2 border-primary text-white sm:text-sm'
            />
        </div>
    )
}

export default Input