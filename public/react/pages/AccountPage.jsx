import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import apiURL from "../utils/api";
import Loading from "../components/Loading";

function AccountPage() {
  const { authUser } = useContext(AuthContext);
  const [myArticles, setMyArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const requestUrl = `${apiURL}/wiki`;

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
      <h1>Account page</h1>
    </>
  );
}

export default AccountPage;
