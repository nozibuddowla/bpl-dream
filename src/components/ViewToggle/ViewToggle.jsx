import React from 'react'

const ViewToggle = ({ value = true, onChange = () => {}, boughtPlayers }) => {
    return (
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-4 md:mb-8 p-4 sora-normal">
            <h2 className='text-[#131313] text-3xl font-bold'>
                {value === true ? "Available Players" : `Selected Players (${boughtPlayers.length}/6)`}  
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
                    Selected <span>({boughtPlayers.length})</span>
                </button>
            </div>
        </div>
    )
}

export default ViewToggle