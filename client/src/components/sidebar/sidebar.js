import React, { useEffect, useState } from "react";
import "./_sidebar.scss";
import ArticleList from "../../components/articlelist/articlelist";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, REMOVE_FAVORITE } from "../../utils/actions";
import API from "../../utils/API";

const Sidebar = () => {
  const [state, dispatch] = useStoreContext();

  const removeArticle = (id) => {
    dispatch({ type: LOADING });
    console.log(id);
    API.deleteArticle(id)
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: REMOVE_FAVORITE,
          payload: result.data,
        });
        console.log(
          dispatch({
            type: REMOVE_FAVORITE,
            payload: result.data,
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const styles = {
    logoutSection: {
      display: "flex",
      padding: "1rem 1rem 2rem 1rem",
      background: "white",
      borderBottom: "1px solid #ececec",
    },
    logoutBtn: {
      background: "#438157",
      border: "none",
      padding: "1rem 2rem",
      borderRadius: "4px",
      color: "white",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    },
    logoutA: {
      color: "white",
    },
  };

  return (
    <header className="shadow">
      <div className="sidenav">
        <div style={styles.logoutSection}>
        <a style={styles.logoutA} href="/">
          <button style={styles.logoutBtn}>
        
              LOG OUT
           
          </button>
          </a>
        </div>
        <ul>
          {state.favorites.map((article, index) => {
            return (
              <ArticleList
                title={article.title}
                url={article.url}
                key={index}
                backgroundImageUrl={article.multimedia[1].url}
                onClick={() => removeArticle(article._id)}
              />
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
