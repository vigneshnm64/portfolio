import React from 'react';
import styles from './nav.module.css';
import {
  Link
} from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <div className={styles.bar}>
      <nav>
        <div className={styles.menu}>
          <Link style={{textDecoration:"none"}} to={'/'}>
            <p>Home</p>
          </Link>
          <Link style={{textDecoration:"none"}} to={'/skills'}>
            <p>Skills</p>
          </Link>
          <Link style={{textDecoration:"none"}} to={'/about'}>
          <p>About</p>
          </Link>
          <Link style={{textDecoration:"none"}} to={'/resume'} >
          <p>Resume</p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default ResponsiveAppBar
