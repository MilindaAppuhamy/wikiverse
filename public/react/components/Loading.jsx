import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 20,
      }}
    >
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: "24px",
          color: "#00bfbf",
        }}
      >
        loading...
      </p>
    </div>
  );
};

export default Loading;
