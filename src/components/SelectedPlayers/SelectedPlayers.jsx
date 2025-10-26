import SelectPlayer from '../SelectPlayer/SelectPlayer';

const SelectedPlayers = ({boughtPlayers, removePlayer, value = true, onChange = () => {}}) => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-4 mb-28'>
            {
                boughtPlayers.map( player => 
                    <SelectPlayer key={player.id} player={player} removePlayer={removePlayer} className='card lg:card-side bg-base-100 shadow-sm lex justify-between items-center p-6' />
                )
            }
            <div className='mt-12'>
                <button 
                    role='tab' 
                    aria-pressed={value === true} 
                    onClick={() => onChange(true)}  className="bg-[#E7FE29] hover:bg-yellow-500 sora-normal text-[#131313] font-bold py-1.5 md:py-3.5 px-2.5 md:px-5 rounded-2xl border-none outline outline-[#131313] outline-offset-8 transition duration-300 cursor-pointer">Add More</button>
            </div>
        </div>
    )
}

export default SelectedPlayers