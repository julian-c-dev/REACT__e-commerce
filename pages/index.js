import React from "react";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
  Cart,
} from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      Footer
      <FooterBanner />
    </>
  );
};

export default Home;
