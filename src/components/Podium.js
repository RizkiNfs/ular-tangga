import React from 'react'
import Avatar from './Avatar'

function Podium({
  winners
}) {

  return (
    <div className="podium">
      <div className="podium-2">
        { winners[1] &&
          <Avatar player={winners[1]}/>
        }
        <div className="text-align-center pa-2 white"> II </div>
      </div>
      <div className="podium-1">
        { winners[0] &&
          <Avatar player={winners[0]}/>
        }
        <div className="text-align-center pa-2 white"> I </div>
      </div>
      <div className="podium-3">
        { winners[2] &&
          <Avatar player={winners[2]}/>
        }
        <div className="text-align-center pa-2 white"> III </div>
      </div>
    </div>
  )
}

export default Podium