import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>234 542 784 25</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <a>
              <li className={styles.listItem}>HomePage</li>
            </a>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <h1 className={styles.h1}>
            <i>Bmat</i>
          </h1>
          {/* <Image src="/img/logo.png" alt="" width="160px" height="96px" /> */}
          <li className={styles.listItem}>Event</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <a>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image
                src="/img/cart.png"
                alt=""
                width="30px"
                height="30px"
                className="counterLogo"
              />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Navbar;
