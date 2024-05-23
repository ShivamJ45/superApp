import React from "react";
import "./CategoryBox.css";

const CategoryBox = ({ data, selected, setSelected }) => {
  const isSelected = selected.includes(data.id);

  const handleSelect = () => {
    if(selected.includes(data.id)){
      setSelected((prev) => prev.filter((item) => item!==data.id));
    }
    else{
      setSelected((prev) => {
        return [...prev,data.id];
      });
    }
  };

  return (
    <div
      className="movieCard"
      onClick={handleSelect}
      style={{
        backgroundColor: data.color,
        textAlign: "left",
        width: "170px",
        height: "150px",
        padding: "8px",
        border: isSelected ? "5px solid green" : "",
      }}
    >
      <p>{data.id}</p>
      {data.image}
    </div>
  );
};

export default CategoryBox;
