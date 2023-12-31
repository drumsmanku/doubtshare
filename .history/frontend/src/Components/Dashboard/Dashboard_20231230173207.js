import React from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'


function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar/>
    </div>
  )
}

export default Dashboard