import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
const footer = () => {
  return (
    <div className={styles.container}>
      <div>2025 Lamania All right Reserved</div>

    <div className='styles.imgco'>
<div className={styles.social}></div>
<Image src='/f1.jpg' alt='Lama' width={32} height={32} className={styles.icon} />
<Image src='/facebook.png' alt='Lama' width={32} height={32}   className={styles.icon} />
<Image src='/instagram.jpeg' alt='Lama' width={32} height={32}  className={styles.icon} />
<Image src='/x.png' alt='Lama' width={32} height={32}   className={styles.icon}/>
    </div>
</div>

  )
}

export default footer