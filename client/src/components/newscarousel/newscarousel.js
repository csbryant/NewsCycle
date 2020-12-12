import React, { useState, useEffect } from "react";
import "./_newscarousel.scss";
import { staticData } from "../../utils/staticData";
import API from "../../utils/API";
import ActionBtn from "../buttons/actionbtn";
import Carousel from "react-bootstrap/Carousel";
import { SAVE_ARTICLE, LOADING } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { pDesktop, pMobile, h1Desktop, h1Mobile } from "../../styles/config.js";

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [state, dispatch] = useStoreContext();
  const [art, setArt] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getTopStories = () => {
    API.getTopStories()
      .then((results) => {
        setArt(results.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTopStories();
  }, []);

  // Checking the size of the window
  const isDesktopOrLaptop = window.matchMedia("(min-width: 1200px)");
  console.log(isDesktopOrLaptop.matches);

  const styles = {
    cardDesktop: {
      backgroundColor: "white",
      width: "55%",
      opacity: "0.96",
      borderRadius: "0.6rem",
      position: "relative",
      top: "50px",
    },

    cardMobile: {
      backgroundColor: "white",
      width: "80%",
      opacity: "0.96",
      borderRadius: "0.6rem",
      position: "relative",
      top: "50px",
    },

    content: {
      padding: "2rem 2rem 4rem 2rem",
      textAlign: "center",
    },

    actionBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  };
  console.log(index);

  const handleSaveArticle = () => {
    let currentArt = art[index];
    dispatch({ type: LOADING });
    dispatch({
      type: SAVE_ARTICLE,
      payload: currentArt,
    });
  };
  console.log(state.favorites);
  return (
    <Carousel
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
      touch={true}
      controls={isDesktopOrLaptop.matches ? true : false}
    >
      {art.map((article, index) => {
        return (
          <Carousel.Item key={index}>
            <div
              style={{
                backgroundImage: `url(${article.multimedia[0].url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={
                  isDesktopOrLaptop.matches
                    ? styles.cardDesktop
                    : styles.cardMobile
                }
              >
                <div style={styles.content}>
                  <h1
                    style={
                      isDesktopOrLaptop.matches
                        ? { fontSize: "2.4rem" }
                        : { fontSize: "1.8rem" }
                    }
                  >
                    {article.title}
                  </h1>
                  <p
                    style={
                      isDesktopOrLaptop.matches
                        ? {
                            fontSize: "1.4rem",
                            marginTop: "1rem",
                            fontWeight: "200",
                          }
                        : {
                            fontSize: "1.2rem",
                            marginTop: "1rem",
                            fontWeight: "200",
                          }
                    }
                  >
                    {article.abstract}
                  </p>
                </div>
              </div>
              <div style={styles.actionBtn}>
                <ActionBtn
                  url={article.url}
                  handleSaveArticle={handleSaveArticle}
                />
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default NewsCarousel;
