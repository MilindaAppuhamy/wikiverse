import React from "react";

function Toast(props) {
  const { message, status } = props;
  return (
    <div
      className="toast"
      style={{
        position: "absolute",
        top: "-110px",
        backgroundColor: status === "error" ? "#ee3939" : "#00aa30",
        width: "300px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "15px",
        zIndex: 100,
        opacity: 0,
      }}
    >
      <h3
        style={{
          fontFamily: "sans-serif",
          fontSize: "18px",
          color: "white",
          backgroundColor: "transparent",
          fontWeight: "bold",
        }}
      >
        {status === "error" ? "Error" : "Success"}
      </h3>
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: "17px",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default Toast;
