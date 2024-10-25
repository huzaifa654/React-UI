import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="h-screen bg-[#090E25] justify-center items-center flex">
            <Triangle
                height="200"
                width="200"
                color="#0075FF"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
    )
}

export default Loader