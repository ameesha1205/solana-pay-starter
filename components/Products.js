import React from "react";
import styles from "../styles/Product.module.css";
import IPFSDownload from './IpfsDownload';

const Product = ({ product }) => {
  const { name, price, description, image_url } = product;

  return (

    <div>
      <div className={styles.product_container}>
        <img className={styles.product_image} src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>
        <div className={styles.product_action}>
          <div className={styles.product_price}>{price} USDC</div>
          <IPFSDownload filename="4PhV.gif" hash="QmWjb8yTky5Y4DNbx2AfxfFC45X97ZqWcrBm8yrVfFVAt4" cta="Download emojis" />
        </div>
      </div>
    </div>
  )
}

export default Product;