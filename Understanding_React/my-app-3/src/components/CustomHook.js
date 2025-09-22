import React from 'react'

export default function CustomHook() {

    const handleFetch = (url) => {
    
        const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false)
    
        const getData = () =>{
            setLoading(true);
            fetch(url)
            .then((data) => data.json())
            .then((jsonData)=>setData(jsonData))
            .catch((error)=>setError(error))
            .finally(()=>setLoading(false))
        }
    
        useEffect(getData, []) // renders at least once
      return [loading, data, error]
    }
    
  return (
    <div>
      
    </div>
  )
}
