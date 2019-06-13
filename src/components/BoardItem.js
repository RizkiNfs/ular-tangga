import React, { useEffect } from 'react'
import Avatar from './Avatar'
import Portal from './Portal' 
import Podium from './Podium'

function BoardItem({
  number,
  players,
  portal,
  intoPortal,
  winners,
}) {

  useEffect(
    () => {
      setTimeout(() => {
        if(portal && players.length > 0 && portal.to !== number) {
          intoPortal(players[0].id, portal)
        } 
      }, 1000)
    },
    [players, portal, intoPortal, number]
  )

  return (
    <div className={`board-item `}>
      <div className="number">
        { number }
      </div>
      <div className="board-item-content">
        { portal &&
          <div className="portal-wrapper">
            <Portal 
              portal={portal}
              number={number}
            />
          </div>
        }
        { winners ?
          <Podium 
            winners={winners}
          /> :
          players && players.map((item,index) => (
            <Avatar key={index} player={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default BoardItem