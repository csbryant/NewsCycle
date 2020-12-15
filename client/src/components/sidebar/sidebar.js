import React, { useEffect, useState } from "react";
import "./_sidebar.scss";
import ArticleList from "../../components/articlelist/articlelist";
import { useStoreContext } from "../../utils/GlobalState";
import {
  REMOVE_FAVORITE,
  LOADING,
  UPDATE_FAVORITES,
  GET_FAVORITES,
} from "../../utils/actions";
import API from "../../utils/API";

const Sidebar = () => {
  const [state, dispatch] = useStoreContext();

  const goGetNewFav = () => {
    API.getFavorites()
      .then((result) => {
        dispatch({
          type: GET_FAVORITES,
          payload: result.data.favorites,
        });
      })
      .catch((err) => console.log(err));
  };

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = (id) => {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: { _id: id },
    });
  };

  useEffect(() => {
    getFavorites();
  }, [state.favorites.length]);

  useEffect(() => {
    goGetNewFav();
  }, []);

  return (
    <header className="shadow">
      <div className="sidenav">
        <div>This is the link to my Profile</div>
        {state.favorites.length ? (
          <ul>
            {state.favorites.map((article, index) => (
              // return (
              <ArticleList
                title={article.title}
                url={article.url}
                key={index}
                backgroundImageUrl={article.multimedia[1].url}
              />
              // );
            ))}
          </ul>
        ) : (
          <h3>You haven't added any favorites yet!</h3>
        )}
      </div>
    </header>
  );
};

export default Sidebar;
