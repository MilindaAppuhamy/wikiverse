import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import apiURL from "../utils/api";
import Loading from "../components/Loading";
import MyArticle from "../components/MyArticles";
import AddPost from "../components/AddPost";

function AccountPage() {
  const { authUser } = useContext(AuthContext);
  const [myArticles, setMyArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const requestUrl = `${apiURL}/wiki/byAuthor/${authUser.id}`;

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(requestUrl);
        setMyArticles(res.data);
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
      <AddPost />
      <div
        style={{
          position: "absolute",
          paddingTop: "220px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!loading ? (
          myArticles.length === 0 ? (
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: "26px",
                textAlign: "center",
                color: "#4a4a4a",
                fontWeight: "normal",
                marginTop: "100px",
              }}
            >
              You have no published articles.
            </h1>
          ) : (
            myArticles.map((article) => <MyArticle article={article} />)
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default AccountPage;
