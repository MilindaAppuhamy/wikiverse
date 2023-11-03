import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import axios from "axios";
import apiURL from "../utils/api";
import Loading from "../components/Loading";

function Feed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const requestUrl = `${apiURL}/wiki`;

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(requestUrl);
        setArticles(res.data);
        setLoading(false);
      } catch (e) {
        console.log("error", e);
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  return (
    <>
      {loading ? <Loading /> : <></>}
      <div
        className="articles-container"
        style={{
          position: "absolute",
          paddingTop: "180px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!loading ? (
          articles.map((article) => <Article article={article} />)
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Feed;
