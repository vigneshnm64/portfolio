import React from 'react'
import ResponsiveAppBar from '../nav/ResponsiveAppBar'
import styles from './comp.module.css'


const Skills=(p)=> {
    return (
        <div>
        <ResponsiveAppBar />
       <p className={styles.skill}>Html,Css,JavaScript,React </p>   
        </div>
    )
}

export default Skills
