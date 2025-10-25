import SelectPlayer from '../SelectPlayer/SelectPlayer';

const SelectedPlayers = ({boughtPlayers, removePlayer}) => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-4'>
            {
                boughtPlayers.map( player => 
                    <SelectPlayer key={player.id} player={player} removePlayer={removePlayer} className='card lg:card-side bg-base-100 shadow-sm lex justify-between items-center p-6' />
                )
            }
        </div>
    )
}

export default SelectedPlayers