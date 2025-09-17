function EventComponent(){

        // e object = event props
     const onChangeHandler = (e) =>{
            // console.log("On Change Handler Called !!")
            if((e.target.value).toLowerCase() === "manjit"){
                console.log("Yes")
            }
        }

    return(
        // React Fragment
        <div style={{textAlign:"center"}}> 
            <div style={{textAlign:"center"}}>
                Welcome to Events
                <br></br>
                <button onClick={
                    () =>{
                        console.log("Button Clicked !!");
                    }
                }
                style={{background:'#d9e80aff', padding:'10px', margin:'5px'}}
                >Click Me</button>
            </div>
            <div style={{background: '#1cb98fff', padding: '50px', margin:'5px', textAlign:"center"}} 
                onMouseEnter={
                    () =>{
                        console.log("Mouse Entered the div")
                    }
                }
                
                onMouseLeave={
                    () =>{
                        console.log("Mouse Exited the div")
                    }
                }>
                This is a div
            </div>
            <input type="text" placeholder="Enter Text" style={{textAlign:"center"}} 
                onChange={onChangeHandler}></input>
        </div>
    );
}

export default EventComponent;