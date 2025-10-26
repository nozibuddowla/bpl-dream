import React, { use } from 'react'
import Player from '../Player/Player';

const AvailablePlayers = ({PlayerPromise, availableBalance, setAvailableBalance, boughtPlayers, setBoughtPlayers}) => {

    const playerData = use(PlayerPromise);
    
    // console.log(playerData);
    
    return (
        <div className='max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-52'>
            {
                playerData.map((player) => (
                <Player key={player.id} player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} boughtPlayers={boughtPlayers} setBoughtPlayers={setBoughtPlayers} />))
            }
        </div>
    )
}

export default AvailablePlayers