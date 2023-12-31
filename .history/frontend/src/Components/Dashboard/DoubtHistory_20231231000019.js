import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
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
          <Card>
            <Card.Header as="h5">{doubt.subjecttype}</Card.Header>
            <Card.Body>
              <Card.Text>
                {doubt.description}
              </Card.Text>
              <Card.Text>
                Language preffered: {doubt.languagepref}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default DoubtHistory