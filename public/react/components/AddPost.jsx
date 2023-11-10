import React, { useContext, useState } from "react";
import apiURL from "../utils/api";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import ArticleForm from "./ArticleForm";

function AddPost(props) {
  const { getArticles } = props;
  const { authUser } = useContext(AuthContext);
  const requestUrl = `${apiURL}/wiki`;
  const [isOpen, setIsOpen] = useState(false);
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
      tags: "",
    },
  });

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

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(requestUrl, post);
      setPost({
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
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
    //refetch the updated data
    await getArticles();
  };

  return (
    <>
      {isOpen ? (
        <ArticleForm
          handleInputChangeFn={handleInputChange}
          handleSubmitFn={handleAddPost}
          buttonName={"Add post"}
          setIsOpen={setIsOpen}
        />
      ) : (
        <div
          className="add-post-button-wrapper"
          style={{
            zIndex: 20,
            position: "fixed",
            top: "25px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
          }}
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
