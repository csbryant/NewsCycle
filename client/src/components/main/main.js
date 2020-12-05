import React from 'react';
import './_main.scss';
import Carousel from '../carousel/carousel';
import MainArticle from '../mainarticle/mainarticle';
import API from "../../utils/API";


class Main extends React.Component {


	state = {
	  topStories: [],
	}
  
	//component did mount, fire off api call
	componentDidMount() {
	  API.getTopStories()
	  .then(res => {
		this.setState({
		  topStories: res.data.results,
		});
		console.log(res.data.results)
	  });
	}
  	
	render() {
	  return (

			<div className='main-grid'>
				<div className='picture-background'>
					<Carousel />
				</div>
				<MainArticle />
			</div>
		);
	}
  }
  
  export default Main;
  
  