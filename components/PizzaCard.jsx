import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`${process.env.NEXT_PUBLIC_API_URL}/product/${pizza._id}`} passHref>
        <a>
          <Image src={pizza.img} height="500" width="500" alt="" />
        </a>
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
