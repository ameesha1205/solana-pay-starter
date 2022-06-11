import React from "react";
import styles from "../styles/Product.module.css";
import Buy from "./Buy";

const Product = ({ product }) => {
  const { id, name, price, description, image_url } = product;

  return (
    <div>
      <div className={styles.product_container}>
        <img className={styles.product_image} src={image_url} alt={name} />

        <div className={styles.product_details}>
          <div className={styles.product_text}>
            <div className={styles.product_title}>{name}</div>
            <div className={styles.product_description}>{description}</div>
          </div>
          <div className={styles.product_action}>
            <div className={styles.product_price}>{price} SOL</div>
            <Buy itemID={id} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product;