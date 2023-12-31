import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

function DoubtHistory() {
  const [data, setData]=useState()
  const reversedArray=[...data]

  useEffect(()=>{
    axios.get('http://localhost:4000/doubt/get-all')
    .then(response=>{setData(response.data)})
  }, [data])
  return (
    <div>
      {data &&
        reversedArray.map((doubt, idx) => (
          <Card>
            <Card.Header as="h5">{doubt.classgrade} Class</Card.Header>
            <Card.Body>
              <Card.Title>Doubt related to <b>{doubt.subjecttype}</b> subject</Card.Title>
              <Card.Text>
                Language preffered: {doubt.languagepref}
              </Card.Text>
              <Card.Text>
                Doubt description: {doubt.description}
              </Card.Text>
              
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default DoubtHistory