import moment from "moment";
import React, { useState } from "react";
import EditTools from "./EditTools";
import EditArticleForm from "../components/EditArticleForm";

const MyArticle = (props) => {
  const { article, getArticles } = props;
  const formattedDate = moment(article.createdAt).format("ddd Do MMM YYYY");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <EditArticleForm setIsOpen={setIsOpen} article={article} />}
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          position: "relative",
        }}
      >
        <EditTools
          article={article}
          setIsOpen={setIsOpen}
          getArticles={getArticles}
        />

        <div
          className="article-container"
          style={{
            borderRadius: "15px",
            border: "2px solid #4a4a4a",
            backgroundColor: "transparent",
            marginBottom: "80px",
            position: "relative",
          }}
        >
          <div
            className="article-title"
            style={{
              borderBottom: "1px solid #4a4a4a",
              fontFamily: "sans-serif",
              fontSize: "26px",
              textAlign: "center",
              backgroundColor: "transparent",
              padding: "8px",
              color: "#4a4a4a",
            }}
          >
            {article.title}
          </div>

          <div
            className="article-details"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              backgroundColor: "transparent",
              borderBottom: "1px solid #4a4a4a",
            }}
          >
            <div
              className="article-author"
              style={{
                width: "50%",
                fontFamily: "sans-serif",
                fontSize: "20px",
                textAlign: "center",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              {article.author.name}
            </div>
            <div
              className="article-published"
              style={{
                width: "50%",
                fontFamily: "sans-serif",
                fontSize: "20px",
                textAlign: "center",
                backgroundColor: "transparent",
                padding: "8px",
                color: "#4a4a4a",
              }}
            >
              {formattedDate}
            </div>
          </div>
          <div
            className="article-body"
            style={{
              backgroundColor: "transparent",
              padding: "8px",
              marginTop: "15px",
            }}
          >
            <p
              style={{
                backgroundColor: "transparent",
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "#4a4a4a",
              }}
            >
              {article.content}
            </p>
          </div>

          <div
            className="article-tags"
            style={{
              backgroundColor: "transparent",
              padding: "8px",
              display: "flex",
              gap: "12px",
            }}
          >
            {article.tags.map((tag) => (
              <p
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  color: "rgb(0, 128, 255)",
                }}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyArticle;
