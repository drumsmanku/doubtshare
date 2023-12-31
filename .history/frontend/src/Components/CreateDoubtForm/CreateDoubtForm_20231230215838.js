import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './CreateDoubtForm.module.css'

function CreateDoubtForm({ closeModal, showAddModal }) {

  const navigate = useNavigate();
  const[doubt, setDoubt]=useState({
    classgrade:'', 
    languagepref : '',  
    subjecttype : '', 
    description : '', 
  })
  const [test, setTest]=useState(0)
  const handleChange = (event) => {
    const { name, value } = event.target;
  
      setDoubt({
        ...doubt,
        [name]: value,
      });
    
  };
  const sendProd = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/doubt/add', doubt, {
      
    })
      .then(res => {
        navigate('/');
        setTest(test+1)
        alert('Doubt added successfully')
        closeModal()
      })
      .catch(err => console.log(err));
  };

  
  const handleClickOutside = (event) => {
    event.stopPropagation();
    closeModal();
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        
        {showAddModal && (
          <div className={styles.modalAdd} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} onClick={handleClickOutside}>
            <div className={styles.modalAddContent} onClick={handleClickInside}>
              
              <div className={styles.modalAddBody}>
             
              <form className={styles.modalAddBodyLeft}>
              <h2>Create doubt </h2>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem',alignItems:'center'}}>
                  <label htmlFor="class"><u>Select Class:</u> </label>
                  <select className={styles.classGrade} name='classgrade' value={doubt.classgrade} onChange={handleChange}>
                    <option value="">Class</option>
                    <option value="11th">6th</option>
                    <option value="12th">7th</option>
                    <option value="10th">8th</option>
                    <option value="11th">9th</option>
                    <option value="11th">10th</option>
                    <option value="12th">11th</option>
                    <option value="10th">12th</option>
                  </select>
                </div>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="languagepref" value={doubt.languagepref} onChange={handleChange} placeholder="Language pref" />
                </div>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="subjecttype" value={doubt.subjecttype} onChange={handleChange} placeholder="Subject Type" />
                </div>


                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="description" value={doubt.description} onChange={handleChange} placeholder="Add description" />
                </div>

                
                <div style={{width:'85%'}}>
                  <button className={styles.addPopupButton} type="submit" style={{ cursor:'pointer'}} onClick={sendProd}>Create</button>
                </div>

              </form>
                <div className={styles.modalAddBodyRight}>
                  <h1 style={{fontSize:'xx-large'}}>DoubtShare</h1>
                  <h1 style={{fontSize:'x-large', width:'40%'}}>Post your doubts......</h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default CreateDoubtForm