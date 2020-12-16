import React from "react";
import "./_articlelist.scss";
import { BiLink } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";


const ArticleList = ({ title, url, backgroundImageUrl, key, onClick }) => {


  const styles = {
    articleContent: {
      width: "100%",
      borderBottom: "1px solid #ececec",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
    },

    imgBg: {
      borderRadius: "50%",
      width: "20%",
      border: "4px solid #ececec",
    },

    btn: {
      display: "flex",
      flexDirection: "column",
    },

    iconBg: {
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      paddingTop: "1px",
      background: "white",
      border: "1px solid #ececec",
      margin: "0.4rem 0",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.articleContent}>
      <img style={styles.imgBg} src={backgroundImageUrl} alt="" />

      <div className="article_title">{title}</div>

      <div style={styles.btn}>
        <div style={styles.iconBg}>
          <a href={url} target="blank" style={{ color: "black" }}>
            <BiLink />
          </a>
        </div>


				<div style={styles.iconBg} onClick={onClick}>
					<GrFormClose style={{ marginTop: '4px', fontSize: '1.2rem' }} />
				</div>
			</div>
		</div>
	);

};

export default ArticleList;
