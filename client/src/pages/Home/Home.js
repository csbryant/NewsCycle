import React, { useEffect, useState } from "react";
import "./_home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import NewsCarousel from "../../components/newscarousel/newscarousel";
import { Desktop, Tablet } from "../../styles/mediaqueries";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { INITIAL_LOAD, LOADING } from "../../utils/actions";

function Home() {
  const [state, dispatch] = useStoreContext();
  const [click, setClick] = useState({ clicked: true });
  const handleClick = () => {
    setClick({ clicked: !click.clicked });
  };

  const getInitialFavorites = () => {
    dispatch({ type: LOADING });
    API.getFavorites()
      .then((result) => {
        console.log(result.data.favorites);
        dispatch({
          type: INITIAL_LOAD,
          payload: result.data.favorites,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getInitialFavorites(), []);

  console.log(state);

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
