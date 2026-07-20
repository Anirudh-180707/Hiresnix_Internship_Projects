import React from "react";

const Sidebar = () => {
  const menuItems = [
    "Dashboard",
    "Products",
    "Purchases",
    "Sales",
    "Reports",
    "Settings",
  ];

  return (
    <div
      style={{
        width: "240px",
        background: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        InventoryMS
      </h2>

      {menuItems.map((item) => (
        <div
          key={item}
          style={{
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
            backgroundColor: "#334155",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#475569")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#334155")
          }
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;