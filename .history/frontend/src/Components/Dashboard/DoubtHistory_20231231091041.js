import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import styles from './DoubtHistory.module.css'

function DoubtHistory() {
  const [data, setData]=useState()
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [classOption, setClassOption] = useState('');
  const [companyOption, setCompanyOption] = useState('');
  const [colorOption, setColorOption] = useState('');
  const [priceOption, setPriceOption] = useState('');


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
               <select className={styles.class} value={classOption} onChange={(e) => setClassOption(e.target.value)}>
                  <option value="">Class</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
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