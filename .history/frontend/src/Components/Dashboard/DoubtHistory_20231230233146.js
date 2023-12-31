import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DoubtHistory() {
  const [data, setData]=useState()

  useEffect(()=>{
    axios.get('http://localhost:4000/login/student')
    .then(response=>{setData(response.data)})
  }, [])
  return (
    <div>{data&&data[0].classgrade}</div>
  )
}

export default DoubtHistory