import React from 'react'
import Display from './Display'
import Board from './Board'

import styles from "../css/calculator.module.css"

function calculator() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Board />
    </div>
  )
}

export default calculator