import React, { useEffect, useState } from "react";
import User from "../User/User";

const Topheading = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=494fb89c26c64fad9afefe8909a0cb2e"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  // console.log(articles);
  return (
    <div>
      <h1>TopHeading : {articles.length}</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {articles.map((article) => (
          <User article={article}></User>
        ))}
      </div>
    </div>
  );
};

export default Topheading;
