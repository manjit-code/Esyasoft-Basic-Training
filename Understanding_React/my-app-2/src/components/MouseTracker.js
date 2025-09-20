import React, {useState, useEffect} from 'react'

export default function MouseTracker() {
    const [currPos, setCurrPos] = useState({
        x: 0, y:0
    });

    useEffect(() =>{

    }, [currPos]);

    const handleMouseMove = (e) =>{
        setCurrPos({x: e.ClientX, y: e.ClientY})
    }

  return (
    <div>
      <div onMouseMove={handleMouseMove}>X-coordinate: {currPos.x}, and Y-coordinate: {currPos.y}</div>
    </div>
  )
}
