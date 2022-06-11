import React, { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

import HeadComponent from '../components/Head';
import Product from "../components/Products";

// Constants
const TWITTER_HANDLE = "ameeshaagrawal";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        });
    }
  }, [publicKey]);

  const renderNotConectedContainer = () => (
    <div>
      <img src="https://media.giphy.com/media/lKQlXQm5bBlMXoCCTX/giphy.gif" alt="emoji" />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header"> Cartoon Pay 🥳🐒 </p>
          <p className="sub-text">Enjoy with your kids 👧🏼</p>
        </header>

        <main>
          {publicKey ? renderItemBuyContainer() : renderNotConectedContainer()}
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
