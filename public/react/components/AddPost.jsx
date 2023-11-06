import React, { useState } from "react";
import apiURL from "../utils/api";
import axios from "axios";

function AddPost() {
  const requestUrl = `${apiURL}/wiki`;
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState({
    user: {
      id: "",
      email: "",
    },
    post: {
      title: "",
      slug: "",
      content: "",
      status: "",
      tags: [],
    },
  });

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(requestUrl, post);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    //refetch
  };

  return (
    <>
      {isOpen ? (
        <div
          className="backdrop"
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            zIndex: 999,
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
              zIndex: 50,
            }}
          >
            <div
              className="close-button-container"
              style={{
                position: "absolute",
                top: "7px",
                right: "7px",
                zIndex: 60,
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
                />
              </div>
              <div className="add-post-form-input">
                <label style={{ zIndex: 1 }}>Slug</label>
                <input
                  type="text"
                  placeholder="Slug"
                  required
                  style={{ zIndex: 0 }}
                />
              </div>
              <div className="add-post-form-input">
                <label style={{ zIndex: 1 }}>Status</label>
                <input
                  type="text"
                  placeholder="Status"
                  required
                  style={{ zIndex: 0 }}
                />
              </div>
              <div className="add-post-form-input">
                <label style={{ zIndex: 3 }}>Content</label>
                <textarea
                  rows="10"
                  draggable={false}
                  placeholder="Content"
                  style={{ zIndex: 1, resize: "none" }}
                ></textarea>
              </div>
              <div className="add-post-form-input">
                <label style={{ zIndex: 3 }}>Tags</label>
                <textarea
                  rows="5"
                  placeholder="Tags"
                  style={{ zIndex: 1, resize: "none" }}
                ></textarea>
              </div>
              <button
                className="add-post-button"
                style={{ marginTop: "5px" }}
                onClick={(e) => handleAddPost(e)}
              >
                Add post
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          className="add-post-button-wrapper"
          style={{ zIndex: 30 }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <button className="add-post-button">Add post +</button>
        </div>
      )}
    </>
  );
}

export default AddPost;
