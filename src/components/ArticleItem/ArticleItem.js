import React from "react";

export const ArticleItem = ({ article }) => {
  return (
    <div className="article-item">
      <div className="article-item__details">
        <img
          className="article-item__img"
          src={article.imageUrl}
          alt="article-item__img"
        />
        <div className="article-item__title">{article.title}</div>
        <div className="article-item__btns">
          <div className="article-item__delete">del</div>
          <div className="article-item__like">like</div>
        </div>
      </div>
    </div>
  );
};
