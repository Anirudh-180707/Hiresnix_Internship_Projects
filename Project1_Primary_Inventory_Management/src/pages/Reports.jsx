import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Reports = () => {
  const totalProducts = 8;
  const totalStock = 616;
  const totalSales = "₹43,250";
  const totalRevenue = "₹1,25,000";

  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      color: "#2563eb",
    },
    {
      title: "Available Stock",
      value: totalStock,
      color: "#10b981",
    },
    {
      title: "Total Sales",
      value: totalSales,
      color: "#f59e0b",
    },
    {
      title: "Revenue",
      value: totalRevenue,
      color: "#8b5cf6",
    },
  ];

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
          <h2>Inventory Reports</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  borderLeft: `6px solid ${card.color}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    color: "#64748b",
                  }}
                >
                  {card.title}
                </h4>

                <h2
                  style={{
                    marginTop: "12px",
                    color: "#1e293b",
                  }}
                >
                  {card.value}
                </h2>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "35px",
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Summary</h3>

            <ul
              style={{
                lineHeight: "2",
              }}
            >
              <li>Total Products Managed: 8</li>
              <li>Low Stock Products: 2</li>
              <li>Purchase Orders: 3</li>
              <li>Sales Orders: 4</li>
              <li>Inventory Status: Healthy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;