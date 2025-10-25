import React from 'react'
import navImg from '../../assets/logo.png';
import dollarImg from '../../assets/dollar.png';

const Header = ({availableBalance}) => {
    const formatted = typeof availableBalance === "number" 
        ? availableBalance.toLocaleString()
        : (Number(String(availableBalance).replace(/[^0-9.-]+/g,"")) || 0).toLocaleString();

    return (
        <div className=" backdrop-blur-2xl bg-white/55 sticky top-0 z-50 mt-12 mb-6">
            <div className='navbar max-w-[1320px] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown z-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 text-[#131313b3] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="w-16 h-16 text-xl">
                        <img src={navImg} alt="" />
                    </a>
                </div>

                <div className="navbar-end sora-normal">
                    <ul className="menu menu-horizontal text-[#131313b3] px-1 hidden lg:flex">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <a className="btn px-5 py-4">
                        <span className='font-semibold text-[#131313] mr-1'>${formatted} USD</span>
                        <span className='mr-1'>
                        <img src={dollarImg} alt="" />
                        </span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header