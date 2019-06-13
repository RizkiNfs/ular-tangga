import React, {useState} from 'react'
import Board from './components/Board'
import PlayerList  from './components/PlayerList'

function App() {
  const [isGameRunning, setIsGameRunning] = useState(false)

  const [players, setPlayers] = useState([])
  const [winners, setWinners] = useState([])

  const startGame = () => {
    setIsGameRunning(true)
    setPlayers(players.map((p,i) => {
      return i === 0 ? {...p, isActive: true} : p
    }))
  }

  const addPlayer = () => {
    setPlayers([...players, {
      id: `player-${players.length + 1}`,
      position: 1
    }])
  }

  const roll = (playerIndex, value) => {
    if(value === 6) {
      setPlayers(players.reduce((acc,p,i) => {
        if (i === playerIndex && p.position + value === 100) { 
          setWinners([...winners, p])
          return [...acc]
        }
        else if(i === playerIndex && p.position + value > 100) {
          return [...acc, p]
        } 
        else if(i === playerIndex) {
          return [...acc, {...p, position: p.position + value}]
        } else {
          return [...acc, p]
        }
      },[]))
    } else {
      setPlayers(players.reduce((acc,p,i) => {
        if (i === playerIndex && p.position + value === 100) { 
          setWinners([...winners, p])
          return [...acc]
        }
        else if (i === playerIndex && p.position + value > 100) { 
          return [...acc, {...p, isActive: false}]
        }
        else if(i === playerIndex) {

          return [...acc, {...p, isActive: false, position: p.position + value}]
        }
        else if(i === playerIndex + 1) { 
          return [...acc, {...p, isActive: true}]
        }
        else if(i === 0 && playerIndex === players.length - 1) { 
          return [...acc, {...p, isActive: true}]
        }
        else {
          return [...acc, p]
        }
      }, []))
    }
  }

  const intoPortal = (playerId, portal) => {
    setPlayers(players.map((p,i) => {
      return  p.id === playerId ? {...p, position: portal.to} : p
    }))
  }

  return (
    <div className="App">
      <main>
        <div style={{width: '20%'}}>
          <div style={{position: 'fixed'}}>
            { !isGameRunning && players.length > 1 &&
              players.length > 0 &&
              <button className="btn" onClick={startGame}>
                Mulai
              </button>
            }
            <PlayerList 
              players={players}
              addPlayer={addPlayer}
              isGameRunning={isGameRunning}
              onRollDice={roll}
            />
          </div>
        </div>
        <Board 
          players={players}
          intoPortal={intoPortal}
          winners={winners}
        />
      </main>
    </div>
  );
}

export default App;
