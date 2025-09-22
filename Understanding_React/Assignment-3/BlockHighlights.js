import React, {useRef, useState, useEffect} from 'react'

export default function BlockHighlights() {
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const [currBox, setCurrentBox] = useState(0);

  const removeHighlights = () =>{
    if(ref0.current) ref0.current.style.border = 'none';
    if(ref1.current) ref1.current.style.border = 'none';
    if(ref2.current) ref2.current.style.border = 'none';
  }

  const addHighlights = ()=>{
    if(currBox == 0) ref0.current.style.border = '5px solid black';
    else if(currBox == 1) ref1.current.style.border = '5px solid black';
    else ref2.current.style.border = '5px solid black';
  }

  const handleNextButtonClick = ()=>{
    let updatedBox = currBox + 1;
    if(updatedBox > 2) updatedBox = 0;
    setCurrentBox(updatedBox);
  }

  const handlePrevButtonClick = ()=>{
    let updatedBox = currBox - 1;
    if(updatedBox < 0) updatedBox = 2;
    setCurrentBox(updatedBox);
  }

  useEffect(()=>{
    removeHighlights();
    addHighlights();
  }, [currBox])

  return (
    <div style={{textAlign:'center'}}>
      <div ref={ref0} style={{background: '#e70f0fff', padding:'10px', margin:'5px'}}>RED</div>
      <div ref={ref1} style={{background: '#0fe713ff', padding:'10px', margin:'5px'}}>GREEN</div>
      <div ref={ref2} style={{background: '#3c4fc8ff', padding:'10px', margin:'5px'}}>BLUE</div>
      <button onClick={handlePrevButtonClick} style={{ padding:'5px', margin:'5px'}}>Prev</button>
      <button onClick={handleNextButtonClick} style={{ padding:'5px', margin:'5px'}}>Next</button>
    </div>
  )
}
