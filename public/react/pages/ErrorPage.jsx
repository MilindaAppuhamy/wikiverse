const ErrorPage = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "#a6ffff",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "40px",
            color: "crimson",
            backgroundColor: "transparent",
          }}
        >
          Error
        </h1>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "40px",
            color: "black",
            backgroundColor: "transparent",
          }}
        >
          : No such page
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
