import React, { createContext, useContext, useReducer } from "react";
import {
  SAVE_ARTICLE,
  REMOVE_FAVORITE,
  UPDATE_FAVORITES,
  LOADING,
  UPDATE_ARTICLES,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
        loading: false,
      };

    case UPDATE_ARTICLES:
     return {
      ...state,
      articles: [...action.payload],
      loading: false
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
          return article._id !== action._id;
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
    articles: [],
    currentArticle: {
      _id: 0,
      title: "",
      abstract: "",
      url: "",
      multimedia: [],
    },
    favorites: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
