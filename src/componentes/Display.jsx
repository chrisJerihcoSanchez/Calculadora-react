import React from 'react'
import styles from "../css/display.module.css"

const Display = () => {
  return (
    <div className={styles.display}>
      <div className={styles.mode}>
        <span className={styles.containerBtn}>
          <button className={`${styles.modeBtn} ${styles.modeLight}`}>☀︎</button>
          <button className={`${styles.modeBtn} ${styles.modeDark}`}>☽</button>          
        </span>
      </div>
      <div className={styles.operation}>
        1<span className={styles.opetador}>+</span>1
      </div>
      <div className={styles.result}>2</div>
    </div>
  )
}

export default Display