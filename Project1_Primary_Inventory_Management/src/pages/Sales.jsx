import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const sales = [
  {
    id: 1,
    customer: "Rahul",
    product: "Rice",
    quantity: 5,
    amount: 250,
  },
  {
    id: 2,
    customer: "Priya",
    product: "Milk",
    quantity: 10,
    amount: 350,
  },
  {
    id: 3,
    customer: "Amit",
    product: "Soap",
    quantity: 8,
    amount: 200,
  },
  {
    id: 4,
    customer: "Sneha",
    product: "Cooking Oil",
    quantity: 3,
    amount: 540,
  },
];

const Sales = () => {
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
          <h2>Sales Orders</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              marginTop: "20px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ background: "#10b981", color: "#fff" }}>
                <th style={th}>Order ID</th>
                <th style={th}>Customer</th>
                <th style={th}>Product</th>
                <th style={th}>Quantity</th>
                <th style={th}>Amount</th>
              </tr>
            </thead>

            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id}>
                  <td style={td}>{sale.id}</td>
                  <td style={td}>{sale.customer}</td>
                  <td style={td}>{sale.product}</td>
                  <td style={td}>{sale.quantity}</td>
                  <td style={td}>₹{sale.amount}</td>
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
  textAlign: "left",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

export default Sales;