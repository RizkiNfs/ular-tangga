import React, { useMemo} from 'react'
import BoardItem from './BoardItem'
import { portals } from '../config/'

function Board({
  players,
  intoPortal,
  winners,
}) {

  const listPortal = portals
  
  const generateBoard = (portals) => {
    return [...Array(10)].map((row,rowIndex) => {
      return [...Array(10)].map((col,colIndex) => {
        const number = colIndex + 1 + (rowIndex * 10)
        return {
          number,
          portal: portals.filter( i => i.from === number || i.to === number )[0] || null
        }
      })
    })
  }

  const board = useMemo(() => generateBoard(listPortal),[listPortal])

  return (
    <div className="board">
      { board.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {
            row.map((col, colIndex) => (
              <div className="board-col" key={colIndex}>
                <BoardItem
                  number={col.number}
                  players={players.filter((item, index) => {
                    return colIndex + 1 + (rowIndex * 10) === item.position
                  })}
                  portal={col.portal}
                  intoPortal={intoPortal}
                  winners={ colIndex + 1 + (rowIndex * 10) === 100 && winners}
                />
              </div>
            ))
          }
        </div>
        ))
      }
    </div>
  )
}

export default Board