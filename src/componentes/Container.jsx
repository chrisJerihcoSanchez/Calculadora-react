import React from 'react'
import Calculator from "./Calculator";

import styles from "../css/container.module.css"

const Container = () => { 
    return <main className={styles.Container}>
        <Calculator /> 
    </main>;
}
export default Container;