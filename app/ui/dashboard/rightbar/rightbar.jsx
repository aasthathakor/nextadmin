"use client";
import React from 'react'
import styles from './rightbar.module.css';
import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';


const Rightbar = () => {
  return (
    <>
<div className={styles.container}>
  <div className={styles.item}>
  <div className={styles.bgContainer}>
  <Image src="/astronaut.png" alt='' fill className={styles.bg} />
  </div>
  <div className={styles.text}>
  <span className={styles.notification}>🔥 Available Now</span>
  <h3 className={styles.title}>
    How to use new version of the admin dashboard ?
  </h3>
  <span className={styles.subtitle}>Takes 4 minutes to learn</span>
  <p className={styles.desc}>
    jfgjdufg efhiefuh dhfjjh dfhd fhdf hd hdfj dhdjf fhjf fh.
    ghdgj fhbg fvnfk kfjnf fhf vfvn dfhjfk whdbf ffhf ffhf df.
  </p>
  <button className={styles.button}>
  <MdPlayCircleFilled />
  Watch
  </button>
  </div>
  </div>

    <div className={styles.item}>

  <div className={styles.text}>
  <span className={styles.notification}>🚀 Coming Soon</span>
  <h3 className={styles.title}>
    New Server action are available, Partial  pre-rendering is coming
    up!
  </h3>
  <span className={styles.subtitle}>Boost your productivity !!!</span>
  <p className={styles.desc}>
    jfgjdufg efhiefuh dhfjjh dfhd fhdf hd hdfj dhdjf fhjf fh.
    ghdgj fhbg fvnfk kfjnf fhf vfvn dfhjfk whdbf ffhf ffhf df.
  </p>
  <button className={styles.button}>
  <MdReadMore />
  Learn
  </button>
  </div>

  </div>
</div>

    </>
  )
}

export default Rightbar