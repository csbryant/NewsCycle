import React, { createContext, useContext, useReducer } from "react";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  LOADING,
  INITIAL_LOAD,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...action.payload, ...state.favorites],
        loading: false,
      };
    }

    case REMOVE_FAVORITE:
      console.log(action.payload);
      return {
        ...state,
        favorites: state.favorites.filter((article) => {
          return article._id !== action.payload._id;
        }),
        loading: false,
      };

    case INITIAL_LOAD:
      return {
        ...state,
        favorites: [...action.payload],
        loading: false,
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
