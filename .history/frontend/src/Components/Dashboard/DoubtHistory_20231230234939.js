import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'

function DoubtHistory() {
  const [data, setData]=useState()

  useEffect(()=>{
    axios.get('http://localhost:4000/doubt/get-all')
    .then(response=>{setData(response.data)})
  }, [])
  return (
    <div>
      {data &&
        data.map((doubt, idx) => (
          <Card key={idx} className="bg-dark text-white">
            <Card.Img src="holder.js/100px270" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{doubt.subjecttype}</Card.Title>
              <Card.Text>
                {doubt.description}
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        ))}
    </div>
  );
}

export default DoubtHistory