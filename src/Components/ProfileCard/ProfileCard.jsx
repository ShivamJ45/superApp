import React from "react";
import ProfilePic from "../../assets/image15.png";
import "./ProfileCard.css"

const ProfileCard = () => {
  const getUserDetails = localStorage.getItem("userinfo");
  const saveUserDetails = JSON.parse(getUserDetails);

//   console.log(saveUserDetails)

  const getMovieGenre = localStorage.getItem("movies");
  const saveMovieGenre = JSON.parse(getMovieGenre);

  // console.log(saveMovieGenre);

  return (
    <div className="profileContainer">
      <div className="profilePic">
        <img src={ProfilePic} alt="" />
      </div>

      <div className="valueContainer">
        <div className="userDetailsDiv">
            <p className="detailName">{saveUserDetails["name"]} </p>
            <p className="detailEmail">{saveUserDetails["email"]} </p>
            <p className="detailUsername">{saveUserDetails["username"]} </p>
        </div>

        <div className="genreDetailsDiv">
            {saveMovieGenre.map((values) => {
                return(
                    <span className="genreSelected">{values}</span>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
