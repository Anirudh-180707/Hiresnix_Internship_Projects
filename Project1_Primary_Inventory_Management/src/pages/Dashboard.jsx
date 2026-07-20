import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import ProductForm from "../components/ProductForm";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";

import productsData from "../data/products";

const Dashboard = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "25px",
          }}
        >
          <DashboardCards />

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

export default Dashboard;