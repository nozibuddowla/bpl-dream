import React from 'react'

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-[#ffffffcc]'>
            <div className="loading loading-infinity loading-xl"/>
        </div>
    )
}

export default Loading