import React, { createContext, useContext, useReducer } from "react";
import {
  SAVE_ARTICLE,
  REMOVE_FAVORITE,
  UPDATE_FAVORITES,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "addFav": {
      return {
        ...state,
        favorites: [...action.payload, ...state.favorites],
      };
    }
    case SAVE_ARTICLE:
      return {
        ...state,
        articleIDs: [action.payload],
        loading: false,
      };

    // case UPDATE_FAVORITES:
    //   return {
    //     ...state,
    //     favorites: [...state.favorites],
    //     loading: false,
    //   };

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
