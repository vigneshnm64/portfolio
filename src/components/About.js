import React from 'react'
import ResponsiveAppBar from '../nav/ResponsiveAppBar'
import styles from './comp.module.css'

const About=(p) => {
    return (
        <div>
            <ResponsiveAppBar />
          <p className={styles.skill} >This is vignesh</p>   
        </div>
    )
}

export default About
