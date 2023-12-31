import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

function DoubtHistory() {
  const [data, setData]=useState()
  const [isLoggedIn, setIsLoggedIn]=useState(false);


  useEffect(()=>{
    const User=localStorage.getItem('user');
    if(User){
      setIsLoggedIn(true);
    }
        
  }, []);
  useEffect(()=>{
    axios.get('http://localhost:4000/doubt/get-all')
    .then(response=>{setData(response.data.reverse())})
  }, [data])
  return (
    <>
      {
        isLoggedIn?(
          <div style={{overflow:'auto'}}>
            <div className={styles.filters}>
               <select className={styles.headphoneType} value={typeOption} onChange={(e) => setTypeOption(e.target.value)}>
                  <option value="">Headphone type</option>
                  <option value="">Featured</option>
                  <option value="In-ear headphone">In-ear headphone</option>
                  <option value="On-ear headphone">On-ear headphone</option>
                  <option value="Over-ear headphone">Over-ear headphone</option>
                </select>
               <select className={styles.company} value={companyOption} onChange={(e) => setCompanyOption(e.target.value)}>
                  <option value="">Company</option>
                  <option value="">Featured</option>
                  <option value="JBL">JBL</option>
                  <option value="Sony">Sony</option>
                  <option value="Boat">Boat</option>
                  <option value="Zebronics">Zebronics</option>
                  <option value="Marshall">Marshall</option>
                  <option value="Ptron">Ptron</option>
                </select>
               <select className={styles.color} value={colorOption} onChange={(e) => setColorOption(e.target.value)}>
                  <option value="">Color</option>
                  <option value="">Featured</option>
                  <option value="Blue">Blue</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Brown">Brown</option>
                </select>
                <select className={styles.price} value={priceOption} onChange={(e) => setPriceOption(e.target.value)}>
                    <option value="">Price</option>
                    <option value="low">₹0-₹1000</option>
                    <option value="medium">₹1000-₹10,000</option>
                    <option value="high">₹10,000-₹20,000</option>
                </select>

            </div>
            {data &&
              data.map((doubt, idx) => (
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
        ):
        (
          <p>Please login/register first</p>
        )
      }
    </>
    
    
  );
}

export default DoubtHistory