import axios from "axios";
import apiURL from "../utils/api";

const EditTools = (props) => {
  const { article, setIsOpen, getArticles } = props;
  const requestUrl = `${apiURL}/wiki/${article.id}`;

  async function handleDelete() {
    try {
      const res = await axios.delete(requestUrl);
      getArticles();
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <>
      <div
        className="edit-tools"
        style={{
          backgroundColor: "#f6f6f6",
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-evenly",
          padding: "10px",
          border: "2px solid #00bfbf",
          transform: "translate(30px, -30px)",
          borderRadius: "14px",
          zIndex: 20,
        }}
      >
        <div
          className="edit-container"
          style={{
            backgroundColor: "transparent",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          <svg
            onClick={() => {
              setIsOpen(true);
            }}
            className="edit-button"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "transparent",
            }}
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#FFFFFF"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
                stroke="#00bfbf"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M21 21H12"
                stroke="#00bfbf"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
        <div
          className="delete-container"
          style={{
            backgroundColor: "transparent",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          <svg
            onClick={handleDelete}
            className="delete-button"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "transparent",
            }}
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#FFFFFF"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 12V17"
                stroke="#00bfbf"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M14 12V17"
                stroke="#00bfbf"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M4 7H20"
                stroke="#00bfbf"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#00bfbf"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#00bfbf"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default EditTools;
