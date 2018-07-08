import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry';
import './App.css'



class App extends Component {
	constructor(){
		super()
		this.state={robots: [],
	searchfield:''}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resoponse=> resoponse.json())
		.then(users=>this.setState({robots: users}));
	}
	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const {robots,searchfield} = this.state;
			const filteredRobots= robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
			if (!robots.length){
				return<h1>Loading</h1>
				}else{
	return(
		<div className="tc">
		<h1 className="f2"> RoboGatoss</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
		<CardList robots={filteredRobots} />
		</ErrorBoundry>
		</Scroll>
	</div>
	);
	}
  }
}
export default App;