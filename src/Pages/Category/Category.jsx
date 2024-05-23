import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";
import Action from "../../assets/action.png";
import Drama from "../../assets/drama.png";
import Fantasy from "../../assets/fantasy.png";
import Fiction from "../../assets/fiction.png";
import Horror from "../../assets/horror.png";
import Music from "../../assets/music.png";
import Romance from "../../assets/romance.png";
import Thriller from "../../assets/thriller.png";
import Western from "../../assets/western.png";
import "./Category.css";
import CategoryChip from "../../Components/CategoryChip/CategoryChip";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img src={Action} alt="" />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img src={Drama} alt="" />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img src={Fantasy} alt="" />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img src={Fiction} alt="" />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img src={Horror} alt="" />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img src={Music} alt="" />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img src={Romance} alt="" />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img src={Thriller} alt="" />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img src={Western} alt="" />,
  },
];

const Category = () => {
  const [selected, setSelected] = useState([]);
  console.log(selected);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("movies",JSON.stringify(selected));
    navigate("/display");
  };

  return (
    <div className="containerC">
      <div className="mainCDiv">
        <div className="leftCDiv">
          <h2 className="leftHeading">Super app</h2>
          <h3 className="leftSubHeading">Choose your entertainment category</h3>
          <div className="selectedCategory">
            {selected.map((item) => {
              return (
                <CategoryChip
                  key={item}
                  data={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </div>
        </div>

        <div className="rightCDiv">
          {genres.map((genres) => {
            return (
              <CategoryBox
                key={genres}
                data={genres}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
      <button className="nextPage" onClick={handleClick}>
        Next Page
      </button>
    </div>
  );
};

export default Category;
