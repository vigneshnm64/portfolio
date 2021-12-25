import React from 'react'
import ResponsiveAppBar from '../nav/ResponsiveAppBar'
import styles from './comp.module.css'

const Home=()=> {
    return (
        <div>
            <ResponsiveAppBar />
            <h1 className={styles.skill}>Welcome From Vignesh</h1>
        </div>
    )
}

export default Home
