import apiURL from "../utils/api";
import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";

const EditArticleForm = (props) => {
  const { setIsOpen, article } = props;
  const { authUser } = useContext(AuthContext);
  const requestUrl = `${apiURL}/wiki/${article.id}`;
  const [post, setPost] = useState({
    user: {
      id: authUser.id,
      email: authUser.email,
    },
    post: {
      title: "",
      slug: "",
      content: "",
      status: "",
      tags: [],
    },
  });

  //getting back tags in a string form separated with a whitespace
  let tags = "";
  for (let tag of article.tags) {
    tags += tag.name + " ";
  }

  const handleInputChange = (e) => {
    setPost((prev) => {
      const userData = prev.user;
      const postData = prev.post;

      return {
        user: { ...userData },
        post: {
          ...postData,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  async function handleEdit(e) {
    e.preventDefault();
    console.log("edited");
  }

  return (
    <div
      className="backdrop"
      style={{
        zIndex: 999,
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        className="add-post-form-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "700px",
          borderRadius: "12px",
          backgroundColor: "whitesmoke",
          boxShadow: "3px 3px 8px #787878",
          zIndex: 900,
        }}
      >
        <div
          className="close-button-container"
          style={{
            position: "absolute",
            top: "7px",
            right: "7px",
            zIndex: 100,
            backgroundColor: "transparent",
            transition: "0.5s ease-in-out",
          }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <svg
            className="close-button"
            style={{
              width: "36px",
              height: "36px",
            }}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#000000"
                stroke-width="1.5"
              />{" "}
              <path
                d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              />{" "}
            </g>
          </svg>
        </div>
        <form
          className="add-post-form"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="add-post-form-input">
            <label style={{ zIndex: 1 }}>Title</label>
            <input
              type="text"
              placeholder="Title"
              required
              style={{ zIndex: 0 }}
              name="title"
              value={article.title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="add-post-form-input">
            <label style={{ zIndex: 1 }}>Slug</label>
            <input
              type="text"
              placeholder="Slug"
              required
              style={{ zIndex: 0 }}
              name="slug"
              value={article.slug}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="add-post-form-input">
            <label style={{ zIndex: 1 }}>Status</label>
            <input
              type="text"
              placeholder="Status"
              required
              style={{ zIndex: 0 }}
              name="status"
              value={article.status}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="add-post-form-input">
            <label style={{ zIndex: 3 }}>Content</label>
            <textarea
              rows="10"
              draggable={false}
              placeholder="Content"
              style={{ zIndex: 1, resize: "none" }}
              name="content"
              value={article.content}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </div>
          <div className="add-post-form-input">
            <label style={{ zIndex: 3 }}>Tags</label>
            <textarea
              rows="5"
              placeholder="Tags"
              style={{ zIndex: 1, resize: "none" }}
              name="tags"
              value={tags}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </div>
          <button
            className="add-post-button"
            style={{ marginTop: "5px" }}
            onClick={(e) => handleEdit(e)}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditArticleForm;
