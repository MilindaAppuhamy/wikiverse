import React from "react";

const BlurBackground = () => {
  return (
    <div
      className="blur-effect"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "112px",
        width: "100%",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        borderBottom: "1px solid rgba(255,255,255,0.18)",
        zIndex: 15,
      }}
    ></div>
  );
};

export default BlurBackground;
