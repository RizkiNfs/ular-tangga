import React from 'react'
import Dice from './Dice'

function PlayerList({
  players,
  addPlayer,
  isGameRunning,
  onRollDice,
}) {

  return (
    <div className="player-list">
      <div>
        { players.length > 0 ? 
          <div>
            {players.map((p,i) => (
              <div className={`player-list-item ${p.id}`} key={i}>
                <span style={{marginRight: '15px'}}>
                  {p.id}
                </span> 
                {p.isActive && 
                  <Dice 
                    playerIndex={i}
                    onRollDice={onRollDice}
                  />
                }
              </div>
            ))}
          </div> :
          <div>
            Belum ada Pemain
          </div>
        }
        { !isGameRunning && players.length < 4 &&
          <div>
            <button className="btn" onClick={addPlayer}>
              Tambah Pemain
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default PlayerList