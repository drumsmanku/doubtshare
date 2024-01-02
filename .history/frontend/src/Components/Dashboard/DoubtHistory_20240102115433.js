import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import styles from './DoubtHistory.module.css'

function DoubtHistory() {
  const [data, setData]=useState()
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [classOption, setClassOption] = useState('');
  const [subjectOption, setSubjectOption] = useState('');
  const [colorOption, setColorOption] = useState('');
  const [priceOption, setPriceOption] = useState('');


  useEffect(()=>{
    const User=localStorage.getItem('user');
    if(User){
      setIsLoggedIn(true);
    }
        
  }, []);
  useEffect(()=>{
    axios.get(`https://doubtshare-postgres-server.onrender.com/doubt/get-all?classgrade=${classOption}&subjecttype=${subjectOption}`)
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
               <select className={styles.subject} value={subjectOption} onChange={(e) => setSubjectOption(e.target.value)}>
                    <option value="">Subject</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
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