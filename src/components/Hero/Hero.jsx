import React from 'react'
import bg from '../../assets/bg-shadow.png' // Assuming this is your subtle noise background
import bannerMain from '../../assets/banner-main.png' // The central cricket graphic

// Figma specifies border-radius: 24px (which is Tailwind's rounded-3xl)
// And a padding (border thickness) of 1px.
const OUTER_RADIUS = '1.5rem'; // rounded-3xl
const INNER_RADIUS = 'calc(1.5rem - 1px)'; // The calculated inner radius

const Hero = () => {
    return (
        <div className="max-w-[1320px] mx-auto mt-6 mb-20 rounded-3xl border-[#1313131a] overflow-hidden bg-gradient-to-lr from-[#1E5AFF]/70 via-[#FF4081]/70 to-[#FFC72C]/70">
            <div className="min-h-[545px] relative overflow-hidden bg-[#131313] 
                            flex items-center justify-center text-center rounded-3xl"
                style={{
                    backgroundImage: `url(${bg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-lr from-[#131313]/5 via-[#131313]/10 to-[#131313]/70 rounded-3xl"></div>
                
                <div className="relative z-10 hero-content text-neutral-content max-w-5xl py-16">
                    <div className="flex flex-col justify-center items-center">
                        
                        <img src={bannerMain} alt="Cricket Graphic" className='w-full max-w-60 mb-6' />
                        
                        <h1 className="text-3xl lg:text-4xl sora-normal font-bold mb-4 text-white">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h1>
                        
                        <p className="mb-6 text-xl lg:text-2xl font-medium text-[#ffffffb3] inter-normal">
                            Beyond Boundaries Beyond Limits
                        </p>

                        <button className="bg-[#E7FE29] hover:bg-yellow-500 sora-normal text-[#131313] font-bold py-3.5 px-5 rounded-2xl border-none outline outline-[#E7FE29] outline-offset-8 transition duration-300 cursor-pointer">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero