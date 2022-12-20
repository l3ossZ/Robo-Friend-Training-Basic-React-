import React,{ Component }from 'react';
import './App.css';
import { robots } from './robots';
import RoboCardList from './component/cardList/RoboCardList';
import SearchBox from './component/search/SearchBox';
import Scroll from './component/scroll/Scroll';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
      return response.json();
    }).then(users =>{
      this.setState({robots: users});
    });

  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value});
  }
  

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if(!robots.length){
      return <h1>Loading</h1>
    }
    else{
  return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <h1>Robo Friend</h1>
          <SearchBox className="search-box" searchChange={this.onSearchChange} />
          <Scroll>
          <RoboCardList robots={filteredRobots} />
          </Scroll>
        
          
        </div>
      </div>
      
    );
    }
  }
}


export default App;
