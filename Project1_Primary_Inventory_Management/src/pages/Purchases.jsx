import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const purchases = [
  {
    id: 1,
    supplier: "ABC Traders",
    product: "Rice",
    quantity: 50,
    amount: 2500,
  },
  {
    id: 2,
    supplier: "Fresh Dairy",
    product: "Milk",
    quantity: 100,
    amount: 3500,
  },
  {
    id: 3,
    supplier: "Daily Mart",
    product: "Soap",
    quantity: 80,
    amount: 2000,
  },
];

const Purchases = () => {
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
          <h2>Purchase Orders</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ background: "#2563eb", color: "#fff" }}>
                <th style={th}>ID</th>
                <th style={th}>Supplier</th>
                <th style={th}>Product</th>
                <th style={th}>Quantity</th>
                <th style={th}>Amount</th>
              </tr>
            </thead>

            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td style={td}>{purchase.id}</td>
                  <td style={td}>{purchase.supplier}</td>
                  <td style={td}>{purchase.product}</td>
                  <td style={td}>{purchase.quantity}</td>
                  <td style={td}>₹{purchase.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const th = {
  padding: "12px",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

export default Purchases;