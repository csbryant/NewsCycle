import React, { useEffect, useState } from "react";
import "./_sidebar.scss";
import ArticleList from "../../components/articlelist/articlelist";
import { staticData } from "../../utils/staticData";
import { useStoreContext } from "../../utils/GlobalState";
import {
  REMOVE_FAVORITE,
  LOADING,
  UPDATE_FAVORITES,
} from "../../utils/actions";

const Sidebar = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = (id) => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id,
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <header className="shadow">
      <div className="sidenav">
        <ul>
          {staticData.map((article, index) => {
            return (
              <ArticleList
                title={article.title}
                url={article.url}
                key={index}
                backgroundImageUrl={article.multimedia[1].url}
              />
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
