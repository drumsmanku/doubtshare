import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './CreateDoubtForm.module.css'

function CreateDoubtForm({ closeModal, showAddModal }) {

  const navigate = useNavigate();
  const[product, setProduct]=useState({
    companyName:'',
    category : [], 
    logoURL : '',  
    productLink : '', 
    description : '', 
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'category') {
      const categoryArray = value.split(',').map((cat) => cat.trim());
      setProduct({
        ...product,
        [name]: categoryArray,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };
  const sendProd = (event) => {
    event.preventDefault();
    axios.post('https://product-portal-rnaz.onrender.com/create-prod', product, {
      headers: {
        'token': localStorage.getItem('token')
      }
    })
      .then(res => {
        navigate('/');
        window.location.reload()
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
              <h2>Add your product </h2>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="companyName" value={product.companyName} onChange={handleChange} placeholder="Name of the company"/>
                </div>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" />
                </div>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="logoURL" value={product.logoURL} onChange={handleChange} placeholder="Add logo url" />
                </div>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="productLink" value={product.productLink} onChange={handleChange} placeholder="Link of Product" />
                </div>

                <div style={{display:'flex', width:'100%', marginBottom:'2rem'}}>
                  <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Add description" />
                </div>

                
                <div style={{width:'85%'}}>
                  <button className={styles.addPopupButton} type="submit" style={{ cursor:'pointer'}} onClick={sendProd}>Add+</button>
                </div>

              </form>
                <div className={styles.modalAddBodyRight}>
                  <h1 style={{fontSize:'xx-large'}}>DoubtShare</h1>
                  <h1 style={{fontSize:'x-large', width:'40%'}}>Post your doubts.............</h1>
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