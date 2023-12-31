import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function Dashboard() {
  const navigate =useNavigate();
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(()=>{
    const User=localStorage.getItem('user');
    if(User){
      setIsLoggedIn(true);
    }
        
  }, []);

  const handleLogin=()=>{
    navigate('/login/student');
  }
  const handleSignup=()=>{
    navigate('/register/student')
  }
  const handleLogout=()=>{
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    
  }
  return (
    <div className={styles.container}>
      <Sidebar/>

      <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
        <div className={styles.navbar}>
          <div className={styles.navBarContent}>
            <div style={{display:'flex', alignItems:'center', fontSize:'small'}}>
              
              <span>9845970484</span>
            </div>


            <div>
              {
                isLoggedIn?(
                  <>
                    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                  </>
                ):
                <>
                <button className={styles.loginButton} onClick={handleLogin}>Login </button>&nbsp;|&nbsp;
                <button className={styles.signupButton} onClick={handleSignup}>Signup</button>
                </>
              }
            </div>
          </div>
          
        </div>

        <div className={styles.mainContent}>
            <Profile/>
            <div style={{width:'100%'}}>
              <Button style={{width:'6rem'}} variant="success">Success</Button>{' '}
            </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard