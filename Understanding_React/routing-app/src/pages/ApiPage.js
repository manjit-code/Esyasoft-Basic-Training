import React from 'react'
import UseFetch from '../hooks/UseFetch'
export default function ApiPage() {

    const url = "https://jsonplaceholder.typicode.com/posts"
    const [loading, data, error] = UseFetch(url);
  return (
    <div>
      {
        loading && <>loading...</>
      }
      {
        !loading && error && <>{error.message}</>
      }
      {
        !loading && !error && data && data.map((ele) =><div key={ele}>{ele.id}. {ele.title}</div>)
      }
    </div>
  )
}
