import axios from 'axios';

const BASEURL = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=';
const APIKEY = process.env.REACT_APP_NYT_API_KEY;

console.log(APIKEY);

export default {
	// Gets all users
	getTopStories: function () {
		return axios.get(BASEURL + APIKEY);
	},
};
