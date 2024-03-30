"use client";
import styles from "./footer.module.css";
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className={styles.container}>
        <div className={styles.logo}>Alex John</div>
        <div className={styles.text}>©️All right reserved.</div>
        </div>
    </>
  )
}

export default Footer