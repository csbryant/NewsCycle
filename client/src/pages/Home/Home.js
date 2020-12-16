import React, { useEffect, useState } from "react";
import "./_home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import NewsCarousel from "../../components/newscarousel/newscarousel";
import { Desktop, Tablet } from "../../styles/mediaqueries";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import {
  REMOVE_FAVORITE,
  LOADING,
  UPDATE_FAVORITES,
} from "../../utils/actions";

function Home() {
  const [state, dispatch] = useStoreContext();
  const [click, setClick] = useState({ clicked: true });
  const handleClick = () => {
    setClick({ clicked: !click.clicked });
  };

  const getFavorites = () => {
    dispatch({ type: LOADING });
    API.getFavorites()
      .then((result) => {
        dispatch({
          type: "addFav",
          payload: result.data.favorites,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getFavorites(), []);
  const styles = {
    gridMobile: {
      display: "grid",
      gridTemplateRows: "6% 94%",
    },
  };

  return (
    <div>
      <Desktop>
        <div className="desktop-grid">
          <Sidebar />
          <NewsCarousel />
        </div>
      </Desktop>
      <Tablet>
        {click.clicked ? (
          <div style={styles.gridMobile}>
            <div>
              <BiMenuAltLeft onClick={handleClick} className="menu-btn" />
            </div>
            <NewsCarousel />
          </div>
        ) : (
          <div style={styles.gridMobile}>
            <div>
              <GrFormClose
                onClick={handleClick}
                className="menu-btn onsidebar"
              />
            </div>
            <Sidebar />
          </div>
        )}
      </Tablet>
      {/* <Mobile>Mobile</Mobile> */}
    </div>
  );
}

export default Home;
