import { faFlag, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Player = ({player}) => {
    const {img, name, country, role, rating, batting_style, bowling_style, price} = player;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='p-6'>
                <figure >
                    <img src={img} alt={name} className="rounded-xl object-cover" />
                </figure>
                <div className='mt-6'>
                    <div className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faUser} className='text-2xl' />
                        <h2 className="card-title sora-normal">{name}</h2>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-3 items-center text-[#13131380]">
                            <FontAwesomeIcon icon={faFlag} />
                            <p className='sora-normal'>{country}</p>
                        </div>
                        <div className="badge badge-ghost px-2.5 py-4 rounded-lg">{role}</div>
                    </div>
                    <hr className='my-4 text-[#13131380]' />
                    <div className='flex flex-col'>
                        <p className='sora-normal font-bold text-[#131313]'>{rating}</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='sora-normal text-[#131313] font-semibold'>{batting_style}</p>
                            <p className='sora-normal text-[#13131380]'>{bowling_style}</p>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <p className='sora-normal text-[#131313] font-semibold'>Price: ${price}</p>
                            <button className="btn btn-outline px-2.5 py-4 sora-normal cursor-pointer text-[#13131380] rounded-lg">Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player