import React from "react";
import { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [news, setNews] = useState();
  // 6cb6f4b30fed44c5abcb1ba7f5dbf711

  useEffect(() => {
    fetch(
      "https://api.worldnewsapi.com/search-news?text=tesla&language=en&api-key=6cb6f4b30fed44c5abcb1ba7f5dbf711"
    )
      .then((data) => data.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(news);

  return (
    <div className="mainNewsDiv">
      {news ? <img src={news.news[0].image}></img> : <></>}
      {news ? <h1 className="newsTitle">{news.news[0].title}</h1> : <></>}
      {news ? (
        <p className="newsText">{news.news[0].text.slice(0, 500)}...</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default News;
