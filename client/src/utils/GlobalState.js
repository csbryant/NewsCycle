import React, { createContext, useContext, useReducer } from "react";
import {
  SAVE_ARTICLE,
  REMOVE_FAVORITE,
  UPDATE_FAVORITES,
  LOADING,
  UPDATE_ARTICLES,
  SET_CURRENT_ARTICLE,
  GET_FAVORITES,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    // case SET_CURRENT_ARTICLE:
    //   return {
    //     ...state,
    //     currentArticle: action.payload.article,
    //     index: action.payload.index,
    //     loading: false,
    //   };
    case SAVE_ARTICLE:
      return {
        ...state,
        articleIDs: [action.payload],
        loading: false,
      };

    // case UPDATE_ARTICLES:
    //   return {
    //     ...state,
    //     articles: [...action.payload],
    //     loading: false,
    //   };

    case GET_FAVORITES:
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
        loading: false,
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((article) => {
          return article._id !== action.payload._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // articles: [],
    // currentArticle: {
    //   index: 0,
    //   title: "",
    //   abstract: "",
    //   url: "",
    //   multimedia: [],
    // },
    articleIDs: [],
    favorites: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
