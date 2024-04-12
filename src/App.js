import logo from './logo.svg';
import './App.css';
import Garage from './components/Garage';
import Header from './components/header';

//function component
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <>
         <Header/>
            Learn React
          <Garage/>
         </>
      </header>
    </div>
  );
}

export default App;
