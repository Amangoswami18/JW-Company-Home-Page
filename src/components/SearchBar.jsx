import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    onSearch(text);
  };

  return (
    <div className="container my-4">
      <div className="position-relative">
        <input
          type="text"
          className="form-control ps-4 pe-5 py-3"
          placeholder="Search Products..."
          value={value}
          onChange={handleChange}
          style={{
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            transition: "all 0.2s ease",
            border: "1px solid #ddd"
          }}
        />
        <span
          className="position-absolute"
          style={{
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#999",
            fontSize: "18px",
            pointerEvents: "none"
          }}
        >
          &#128269;
        </span>
      </div>
    </div>
  );
}
