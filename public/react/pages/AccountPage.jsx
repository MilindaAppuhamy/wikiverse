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

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <AddPost getArticles={getArticles} />

      <>
        {!loading &&
          (myArticles.length === 0 ? (
            <div
              style={{
                position: "absolute",
                marginTop: "220px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "transparent",
                zIndex: 20,
              }}
            >
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
            </div>
          ) : (
            <>
              <div style={{ paddingTop: "250px" }}></div>
              {myArticles.map((article) => (
                <>
                  <div
                    className="my-articles-container"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "transparent",
                    }}
                  >
                    <MyArticle article={article} getArticles={getArticles} />
                  </div>
                </>
              ))}
            </>
          ))}
      </>
    </>
  );
}

export default AccountPage;
