import React from "react";
import { useNavigate } from "react-router-dom";
import apiURL from "../utils/api";
import axios from "axios";

function SettingsPage() {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const baseUrl = apiURL;
  const requestUrl = `${baseUrl}/users/${authUser.id}`;
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("authUser");
    navigate("/");
    return;
  }

  async function handleDeleteAccount() {
    try {
      await axios.delete(requestUrl);
      localStorage.removeItem("authUser");
      navigate("/");
      return;
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          paddingTop: "180px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "900px",
            borderRadius: "15px",
            backgroundColor: "whitesmoke",
            padding: "20px",
            boxShadow: "3px 3px 8px #787878",
          }}
        >
          <div
            className="my-account-details"
            style={{
              margin: "10px",
              backgroundColor: "white",
              display: "grid",
              gridTemplateAreas: `"name value"
            "name value"
            "name value"`,
              gridTemplateColumns: "1fr 1fr",
              gridColumnGap: "5px",
              gridTemplateRows: "30px 30px 30px",
              gridRowGap: "15px",
              backgroundColor: "transparent",
              marginBottom: "60px",
            }}
          >
            <h1
              style={{
                gridArea: "name",
                gridRow: "1",
                fontFamily: "sans-serif",
                fontSize: "20px",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              Name
            </h1>
            <h1
              style={{
                gridArea: "value",
                gridRow: "1",
                fontFamily: "sans-serif",
                fontSize: "20px",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              {authUser.name}
            </h1>
            <h1
              style={{
                gridArea: "name",
                gridRow: "2",
                fontFamily: "sans-serif",
                fontSize: "20px",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              Email
            </h1>
            <h1
              style={{
                gridArea: "value",
                gridRow: "2",
                fontFamily: "sans-serif",
                fontSize: "20px",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              {authUser.email}
            </h1>
            <h1
              style={{
                gridArea: "name",
                gridRow: "3",
                fontFamily: "sans-serif",
                fontSize: "20px",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              Password
            </h1>
            <h1
              style={{
                gridArea: "value",
                gridRow: "3",
                fontFamily: "sans-serif",
                fontSize: "20px",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              {authUser.password}
            </h1>
          </div>

          <div
            className="my-account-actions"
            style={{
              backgroundColor: "transparent",
              gap: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
            <button
              className="delete-account-button"
              onClick={handleDeleteAccount}
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
