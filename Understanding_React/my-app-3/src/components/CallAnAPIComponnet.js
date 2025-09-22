import React, { useEffect, useState } from 'react'

export default function CallAnAPIComponnet() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const getData = () =>{
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((jsonData)=>setData(jsonData))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false))
    }

    useEffect(getData, []) // renders at least once
  return (
    <div>
        {/* <button onClick={getData}>GetData</button> */}
        {
            error != null ? <div>{error.message} </div>: <></>
            // or
            // error != null && <>{error.message}</>
        }
        {
            loading ? <div>Loading...</div>: <></>
        }
        {
            data.map((e)=> <div>{e.id} : {e.title}</div>)
        }
    </div>
  )
}
