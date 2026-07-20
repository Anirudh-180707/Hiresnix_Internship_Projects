import React from "react";
import StockBadge from "./StockBadge";

const ProductTable = ({ products, search }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        overflowX: "auto",
      }}
    >
      <h3>Product Inventory</h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "#fff" }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <td style={tdStyle}>{index + 1}</td>

              <td style={tdStyle}>{product.name}</td>

              <td style={tdStyle}>{product.category}</td>

              <td style={tdStyle}>₹{product.price}</td>

              <td style={tdStyle}>{product.stock}</td>

              <td style={tdStyle}>
                <StockBadge stock={product.stock} />
              </td>

              <td style={tdStyle}>
                <button style={editBtn}>
                  Edit
                </button>

                <button style={deleteBtn}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const editBtn = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  marginRight: "8px",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ProductTable;