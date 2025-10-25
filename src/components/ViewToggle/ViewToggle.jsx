import React from 'react'

const ViewToggle = ({ value = true, onChange = () => {} }) => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between items-center mb-8 sora-normal">

            <h2 className='text-[#131313] text-3xl font-bold'>
                {value === true ? "Available" : "Selected"} Players
            </h2>

            <div className='join' role='tablist' aria-label='View toggle' >
                <button 
                role='tab' 
                aria-pressed={value === true} 
                onClick={() => onChange(true)} 
                className={`btn join-item py-3.5 px-7 rounded-l-xl  
                ${value === true 
                ? "bg-[#e7fe29] text-[#131313] hover:bg-yellow-500 font-bold" 
                : "text-[#13131399]"} `}>
                    Available
                </button>

                <button 
                role='tab' 
                aria-pressed={value === false} 
                onClick={() => onChange(false)} 
                className={`btn join-item py-3.5 px-7 rounded-r-xl  
                ${value === false 
                ? "bg-[#e7fe29] text-[#131313] hover:bg-yellow-500 font-bold" 
                : "text-[#13131399]"} `}>
                    Selected <span>(0)</span>
                </button>
            </div>
        </div>
    )
}

export default ViewToggle