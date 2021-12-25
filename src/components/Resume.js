import React from 'react'
import ResponsiveAppBar from '../nav/ResponsiveAppBar'
import styles from './comp.module.css'

function Resume(p) {
    return (
        <div>
        <ResponsiveAppBar />
        <p className={styles.skill}>This is my Resume </p>  
        </div>
    )
}

export default Resume
