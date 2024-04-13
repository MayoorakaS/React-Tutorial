import './App.css';
import Garage from './components/Garage';
import Header from './components/header';
import FavouriteColor from './components/states/FavouriteColor';
import FavouriteCar from './components/states/FavourtieCar';
import List from './components/states/List';
import Scooter from './components/states/Scooter';

//function component
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <>
            <FavouriteColor/>
            <FavouriteCar/>
            <Scooter/>
            <List/>
         {/* <Header/>
            Learn React
          <Garage/> */}
         </>
      </header>
    </div>
  );
}

export default App;
