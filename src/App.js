import './App.css';
import { robots } from './robots';
import RoboCardList from './component/cardList/RoboCardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <h1>Robo Friend</h1>
        <div>
          <RoboCardList robots={robots} />
      </div>
        
      </div>
    </div>
    
  );
}

export default App;
