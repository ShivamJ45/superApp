import React from 'react'
import './CategoryChip.css'

const CategoryChip = ({data,setSelected}) => {
  const handleClick = () => {
    setSelected((prev) => prev.filter((item) => item!==data));
  };

  return (
    <span className='chipDiv' >
      <div className="selectedChip" style={{ background: "green", padding: "12px", borderRadius: "20px" }}> {data}&nbsp; &nbsp; <span className='x' onClick={handleClick}>X</span></div>
    </span>
  )
}

export default CategoryChip
