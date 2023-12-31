import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'


function Dashboard() {
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
      <div className={styles.navbar}>
        <div className={styles.navBarContent}>
          <div style={{display:'flex', alignItems:'center', fontSize:'small'}}>
            <img src={phoneImg} height={20} alt="" style={{marginRight:'0.5rem'}} />
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
        <div className={styles.searchBarSmallScreen}>
            <img src={search} alt="" height={30} />
            <input type="text" placeholder='Search Product' onChange={(e)=>{setNameSearch(e.target.value)}} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard