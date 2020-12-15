import React, { useState, useEffect } from "react";
import "./_home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import NewsCarousel from "../../components/newscarousel/newscarousel";
import { Desktop, Tablet } from "../../styles/mediaqueries";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { GET_FAVORITES } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

function Home() {
  const [click, setClick] = useState({ clicked: true });
  const handleClick = () => {
    setClick({ clicked: !click.clicked });
  };

  const [state, dispatch] = useStoreContext();

  const getInitialFavorites = () => {
    API.getFavorites()
      .then((result) => {
        dispatch({
          type: GET_FAVORITES,
          payload: result.data.favorites,
        });
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   getInitialFavorites();
  // }, []);

  const styles = {
    gridMobile: {
      display: "grid",
      gridTemplateRows: "5% 95%",
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
