import React, { use } from 'react'
import Player from '../Player/Player';

const AvailablePlayers = ({PlayerPromise, availableBalance, setAvailableBalance}) => {

    const playerData = use(PlayerPromise);
    
    // console.log(playerData);
    
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                playerData.map((player) => (
                <Player availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} key={player.id} player={player} />))
            }
        </div>
    )
}

export default AvailablePlayers