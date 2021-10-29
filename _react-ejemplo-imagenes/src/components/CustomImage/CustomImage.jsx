import React from 'react'

// Esto son "css module", los modulos de css tienen un scope local, no global, a cada componente.
// significa que los estilos que le pusimos al tag img en este componente no pisan ni seran pisados por los de otro.
import styles from './CustomImage.css'

const CustomImage = ({img, name}) => (
  <div className={styles.customImageBox}>
    <img src={img} alt={name} />
  </div>
)

export default CustomImage
