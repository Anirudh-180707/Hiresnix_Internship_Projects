import React from "react";

const cards = [
  {
    title: "Total Products",
    value: 125,
    color: "#2563eb",
  },
  {
    title: "Low Stock",
    value: 12,
    color: "#f59e0b",
  },
  {
    title: "Total Sales",
    value: "₹42,500",
    color: "#10b981",
  },
  {
    title: "Revenue",
    value: "₹1,25,000",
    color: "#8b5cf6",
  },
];

const DashboardCards = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderLeft: `6px solid ${card.color}`,
          }}
        >
          <h4
            style={{
              margin: "0",
              color: "#64748b",
              fontWeight: "500",
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
  );
};

export default DashboardCards;