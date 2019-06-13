import React, {useState, useEffect} from 'react'

function Dice({
  playerIndex,
  onRollDice,
}) {

  const [randomNumber, setRandomNumber] = useState(0)
  const [intervalCount, setIntervalCount] = useState(1)
  const [isRolling, setIsRolling] = useState(false)

  function randomizer() {
    return Math.floor(Math.random() *  ((Math.floor(6) - Math.floor(1)) + 1) + Math.floor(1))
  }

  const rollDice = () => {
    let _intervalCount = 0
    setIsRolling(true)
    let interval = setInterval(() => {
      if(_intervalCount < 10) {
        setRandomNumber(randomizer())
        _intervalCount++
      } else {
        clearInterval(interval)
        setIntervalCount(_intervalCount)
      }
    }, 200)

  }

  useEffect(() => {
    if(intervalCount >= 10) {
      setTimeout(() => {
        setIntervalCount(0)
        setIsRolling(false)
        onRollDice(playerIndex, randomNumber)
      }, 1000)
    }
  }, [randomNumber, intervalCount, onRollDice, playerIndex])

  return (
    <button disabled={isRolling} className="dice" onClick={rollDice}>
      { isRolling ? 
        randomNumber : 
        'roll'
      }
    </button>
  )
}


export default Dice