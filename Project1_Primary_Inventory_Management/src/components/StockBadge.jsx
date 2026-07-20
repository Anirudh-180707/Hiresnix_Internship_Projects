import React from "react";

const StockBadge = ({ stock }) => {
  let backgroundColor = "#10b981";
  let text = "In Stock";

  if (stock <= 10) {
    backgroundColor = "#ef4444";
    text = "Out of Stock";
  } else if (stock <= 30) {
    backgroundColor = "#f59e0b";
    text = "Low Stock";
  }

  return (
    <span
      style={{
        backgroundColor,
        color: "white",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "bold",
      }}
    >
      {text}
    </span>
  );
};

export default StockBadge;