import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'


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
    navigate('/login');
  }
  const handleSignup=()=>{
    navigate('/register')
  }
  const handleLogout=()=>{
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    
  }
  return (
    <div className={styles.container}>
      <Sidebar/>

      <div style={{display:'flex', flexDirection:'column'}}>
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
            
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard