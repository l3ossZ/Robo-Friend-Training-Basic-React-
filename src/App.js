import './App.css';
import RoboCard from './component/card/RoboCard';
import { robots } from './robots';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <h1>Robo Friend</h1>
        <div>
          {robots.map(robot => {
            <RoboCard id={robot.id} name={robot.name} email={robot.email} />
            return <RoboCard id={robot.id} name={robot.name} email={robot.email} />;
          })};
      </div>
        
      </div>
    </div>
    
  );
}

export default App;
