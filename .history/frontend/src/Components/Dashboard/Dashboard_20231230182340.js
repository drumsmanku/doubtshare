import React from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'


function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <Profile/>
    </div>
  )
}

export default Dashboard