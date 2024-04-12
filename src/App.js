import logo from './logo.svg';
import './App.css';
import Garage from './components/Garage';

//function component
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <>
            Learn React
          <Garage/>
         </>
      </header>
    </div>
  );
}

export default App;
