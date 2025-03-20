import React from 'react'

import styles from "./MyCss.module.css"

const MyCss = () => {
  return (
    <div>
        <h1 className={styles.MeuTitulo}>
            Texto do componente MyCss
        </h1>
    </div>
  )
}

export default MyCss