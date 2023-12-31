import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DoubtHistory() {
  const [data, setData]=useState()

  useEffect(()=>{
    axios.get('http://localhost:4000/doubt/get-all')
    .then(response=>{setData(response.data)})
  }, [])
  return (
    <div>
      {
        data&&(
          data.map((doubt, idx)=>(
            
          ))
        )
      }
    </div>
  )
}

export default DoubtHistory