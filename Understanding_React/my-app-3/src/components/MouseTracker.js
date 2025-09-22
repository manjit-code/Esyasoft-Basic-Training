import React, {useState, useEffect} from 'react'

export default function MouseTracker() {
    const [currPos, setCurrPos] = useState({
        x: 0, y:0
    });

    useEffect(() =>{
      const handleMouseMove = (e) => {
            setCurrPos({ x: e.clientX, y: e.clientY });
        };

      window.addEventListener('mousemove', handleMouseMove);
      return () =>{
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, []);

  return (
    <div>
      <div>X-coordinate: {currPos.x}<br/> Y-coordinate: {currPos.y}</div>
    </div>
  )
}
