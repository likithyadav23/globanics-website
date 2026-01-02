import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/products.css";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products">
      <h2>Our Products</h2>
      <p className="products-subtitle">
        Advanced winding machine solutions for electrical manufacturing
      </p>

      <div className="products-grid">
        {/* Product 1 */}
        <div
          className="product-card"
          onClick={() => navigate("/products/winding")}
        >
          <img src="/images/wind.jpeg" alt="Winding Machines" />
          <h3>Winding Machines</h3>
        </div>

        {/* Product 2 */}
        <div
          className="product-card"
          onClick={() => navigate("/products/processing")}
        >
          <img src="/images/processing/BRM100.jpg" alt="Testing Machines" />
          <h3>Processing Machines</h3>
        </div>

        {/* Product 3 */}
        <div
          className="product-card"
          onClick={() => navigate("/products/testing")}
        >
          <img src="/images/testing/RETS250Img.jpg" alt="Processing Machines" />
          <h3>Testing Machines</h3>
        </div>
        {/* Product 4 */}
        <div
          className="product-card"
          onClick={() => navigate("/products/final-testing")}
        >
          <img src="/images/finaltest/AssemblyFrontView.jpg" alt="Testing Machines" />
          <h3> Final Testing Machines</h3>
        </div>

      </div>
    </div>
  );
};

export default Products;
