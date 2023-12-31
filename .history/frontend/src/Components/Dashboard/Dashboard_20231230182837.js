import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'


function Dashboard() {

  useEffect(()=>{
    const User=localStorage.getItem('user');
    if(User){
      setIsLoggedIn(true);
    }
        
  }, []);
  return (
    <div className={styles.container}>
      <Sidebar/>
      
    </div>
  )
}

export default Dashboard