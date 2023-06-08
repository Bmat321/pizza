import React, { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  const changePrice = (e, index) => {
    const currentPrice = prices;
    currentPrice[index] = e.target.value;
    setPrices(currentPrice);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/bmatty/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        extraOptions,
        prices,
        img: url,
      };
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add New Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            type="text"
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.priceCointainer}>
            <label className={styles.label}>Prices</label>
            <input
              type="number"
              placeholder="Small"
              className={`${styles.input} ${styles.inputS}`}
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              placeholder="Medium"
              className={`${styles.input} ${styles.inputS}`}
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              type="number"
              placeholder="Large"
              className={`${styles.input} ${styles.inputS}`}
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              type="text"
              placeholder="item"
              name="text"
              className={`${styles.input} ${styles.inputS}`}
              onChange={handleExtraInput}
            />
            <input
              type="number"
              placeholder="price"
              name="price"
              className={`${styles.input} ${styles.inputS}`}
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button onClick={handleCreate} className={styles.addButton}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
