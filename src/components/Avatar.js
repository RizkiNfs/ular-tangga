import React from 'react'
function Avatar({
  player
}) {

  return (
    
      <div className={`avatar ${player.id}`} >{player.id.split('-')[1]}</div>
    
  )
}

export default Avatar