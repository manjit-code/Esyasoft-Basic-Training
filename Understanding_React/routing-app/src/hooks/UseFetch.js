import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UseFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const getData = async () => {
        try{
            setLoading(true);

            // Synchronous Approach
            // const token = "abc";
            // fetch(url, {
            //     headers:{
            //         'Authorization' : `Bearer ${token}`
            //     },
            //     body:{},
            //     payload:{}
            // })
            const resposne = await axios.get(url);
            setData(resposne.data);
        }
        catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }
    }


    useEffect(() =>{
        return getData
    }, [])

    return [loading, data, error]
}

export default UseFetch;