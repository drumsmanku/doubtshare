import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DoubtHistory() {
  const [data, setData]=useState()
  const reversedArray=data.reverse()

  useEffect(()=>{
    axios.get('http://localhost:4000/doubt/get-all')
    .then(response=>{setData(response.data)})
  }, [])
  return (
    <div>
      {
        data&&(
          reversedArray.map((doubt, idx)=>(
            doubt.classgrade
          ))
        )
      }
    </div>
  )
}

export default DoubtHistory