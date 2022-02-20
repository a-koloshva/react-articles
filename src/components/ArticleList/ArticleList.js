import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectErrorMessage,
  selectIsError,
  selectIsLoading,
} from "../../store/articles/selectors";
import { ArticleItem } from "../ArticleItem";

export const ArticleList = () => {
  const articles = useSelector(selectArticles);
  const errorMsg = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  const requestArticles = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    requestArticles();
  });

  return (
    <>
      <h3>Articles</h3>
      {isLoading}
      {!isError ? (
        <>
          {articles.map((article) => (
            <ArticleItem article={article} key={article.id}></ArticleItem>
          ))}
        </>
      ) : (
        <h3>Error: {isError} </h3>
      )}
    </>
  );
};
