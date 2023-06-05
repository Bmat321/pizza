import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/resones.png"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH MY BMAT PIZZA, OF GREAT COURSE</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTURANT</h1>
          <p className={styles.text}>
            25, Diran Aake Road #241.
            <br /> NG, 100261
            <br />
            (234) 757842 548
          </p>
          <p className={styles.text}>
            25, Diran Aake Road #875.
            <br /> NG, 100261
            <br />
            (234) 757842 548
          </p>
          <p className={styles.text}>
            74, Dern Weke Road #241.
            <br /> NG, 100241
            <br />
            (234) 7572 548
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 8:00AM - 8:00PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00AM - 7:00PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
