import React from 'react'
import styles from '../css/button.module.css'

const Button = ({color,dato}) => {
  return (
    <div className={styles.containerBtn}>
      <button className={`${styles.btn}`}>{dato}</button>
    </div>
  )
}

export default Button