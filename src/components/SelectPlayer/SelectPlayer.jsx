import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify';

const SelectPlayer = ({player, removePlayer}) => {
    const {img, name, role} = player;

    const handleRemove = () => {
        removePlayer(player);
        toast(` ${name} removed from the squad`);
    }

    return (
        <div className='card lg:card-side bg-base-100 shadow-sm lex justify-between items-center p-6'>
                        <div className='flex flex-wrap gap-6 items-center'>
                            <figure>
                                <img src={img} alt={name} className='rounded-2xl w-20 h-20' />
                            </figure>
                            <div className='flex flex-col sora-normal'>
                                <h2 className='text-[#131313]  font-bold text-2xl'>{name}</h2>
                                <p className='text-[#13131399]'>{role}</p>
                            </div>
                        </div>
                        <button onClick={handleRemove} className='cursor-pointer'>
                            <FontAwesomeIcon icon={faTrashCan} className='text-2xl text-[#F14749]' />
                        </button>
                    </div>
    )
}

export default SelectPlayer