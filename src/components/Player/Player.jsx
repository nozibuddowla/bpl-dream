import { Rating } from '@fluentui/react-rating';
import { faFlag, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify';

const Player = ({player, availableBalance, setAvailableBalance, boughtPlayers, setBoughtPlayers}) => {

    const {img, name, country, role, rating, batting_style, bowling_style, price} = player;

    const starValue = Math.round((rating / 10) * 10) / 2 ;

    const canAfford = typeof availableBalance === "number" ? availableBalance >= price : false;

    const isSelected = boughtPlayers.find(p => p.id === player.id);

    const handleChoosePlayer = (playerData) => {
        if(!canAfford || isSelected) {
            toast("Not enough coins!")
            return;
        }
        if (boughtPlayers.length === 6) {
            toast("Already 6 players are selected!");
            return;
        }
        setAvailableBalance(prev => Math.max(0, prev - price));
        setBoughtPlayers([...boughtPlayers, playerData]);

        toast(`${name} is selected!`)
    }

    return (
        <div className={`card shadow-sm hover:-translate-2.5 cursor-pointer transition-all duration-300 ${isSelected ? "bg-yellow-50" : "bg-base-100"}`}>
            <div className='p-6'>
                <figure>
                    <img src={img} alt={name} className=" rounded-xl w-full h-96 object-cover" />
                </figure>

                <div className='mt-6'>
                    <div className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faUser} className='text-lg md:text-xl lg:text-2xl' />

                        <h2 className="card-title text-xl md:text-2xl lg:text-3xl font-semibold sora-normal">{name}</h2>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-3 items-center text-[#13131380]">
                            <FontAwesomeIcon icon={faFlag} />

                            <p className='sora-normal'>{country}</p>
                        </div>
                        <div className="badge badge-ghost px-2.5 py-4 rounded-lg">{role}</div>
                    </div>
                    <div className="divider my-4"></div>

                    <div className='flex flex-col'>
                        <div className="flex justify-between items-center">
                            <p className='sora-normal font-bold text-[#131313]'>Rating</p>

                            <div className='flex items-center gap-2'>
                                <Rating  className='text-orange-500' value={starValue} max={5} readOnly aria-label={`${rating}`} />

                                <span className="sora-normal font-bold text-[#131313]">
                                    {rating.toFixed(1)} / 10
                                </span>
                            </div>
                        </div>
                        
                        <div className='flex justify-between items-center mt-4'>
                            <p className='sora-normal text-[#131313] font-semibold'>{batting_style}</p>

                            <p className='sora-normal text-[#13131380]'>{bowling_style}</p>
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <p className='sora-normal text-[#131313] font-semibold'>Price: ${price}</p>

                            <button 
                                onClick={() => handleChoosePlayer(player)} 
                                disabled={(isSelected === true) || !canAfford} 
                                className={`btn btn-outline px-2.5 py-4 sora-normal cursor-pointer text-[#13131380] rounded-lg 
                                ${isSelected 
                                    ? "bg-[#e7fe29] border-[#e7fe29] btn-soft" 
                                    : "" } 
                                ${!canAfford 
                                    ? "opacity-60 cursor-not-allowed"
                                    : ""} `}>
                                    { isSelected 
                                    ? "Selected" 
                                    : (!canAfford ? "Insufficient" 
                                    : "Choose Player")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player