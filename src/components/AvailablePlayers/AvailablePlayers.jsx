import React, { use } from 'react'

const AvailablePlayers = ({PlayerPromise}) => {

    const playerData = use(PlayerPromise);
    
    console.log(playerData);
    
    return (
        <div>AvailablePlayers</div>
    )
}

export default AvailablePlayers