import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CreateDoubtForm from '../CreateDoubtForm/CreateDoubtForm'
import DoubtHistory from './DoubtHistory'


function Dashboard() {
  const navigate =useNavigate();
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

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
  const handleAdd = () => {
    setShowAddModal(true);
  };
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
        
          {
            isLoggedIn?
            <>
               <div className={styles.mainContent}>
                  
                  <Profile/>
                  <div style={{width:'100%', textAlign:'center', marginTop:'2rem'}}>
                    <Button style={{width:'9rem'}} onClick={handleAdd} variant="success">Create Doubt</Button>{' '}
                  </div>

                  {
                    showAddModal && (
                      <CreateDoubtForm
                        closeModal={() => setShowAddModal(false)}
                        showAddModal={showAddModal}
                      />
                    )
                  }
                  
              </div>
            </>
            :
            <>
              <p>Please login/register first</p>
            </>
          }
        
      </div>
      <DoubtHistory/>
    </div>
  )
}

export default Dashboard