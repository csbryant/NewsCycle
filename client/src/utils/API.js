import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=";
const APIKEY = process.env.REACT_APP_NYT_API_KEY;



export default {
  // Gets all users
  getTopStories: function () {
    return axios.get(BASEURL + APIKEY);
  },
  // Saves an article to the reading list
  saveArticle: function (data) {
    return axios.post("/api/articles", data);
  },
  getFavorites: function () {
    return axios.get("/api/articles");
  },

  // Deletes the post with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
    },
};
