import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

import productsData from "../data/products";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f6f9",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "25px" }}>
          <h2
            style={{
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Product Management
          </h2>

          <ProductForm
            onAddProduct={addProduct}
          />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <ProductTable
            products={products}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;