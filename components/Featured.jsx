import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [slider, setSlider] = useState(0);
  const images = [
    "/img/featuredtwo.png",
    "/img/featuredthree.png",
    "/img/featuredfour.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "b") {
      setSlider(slider !== 0 ? slider - 1 : 2);
    }
    if (direction === "f") {
      setSlider(slider !== 2 ? slider + 1 : 0);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => handleArrow("b")}
        >
          <Image src="/img/back.png" alt="" layout="fill" objectFit="contain" />
        </div>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * slider}vw)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
              <Image src={img} alt="" layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => handleArrow("f")}
        >
          <Image
            src="/img/forward.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
