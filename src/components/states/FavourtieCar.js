import React from 'react';

class FavouriteCar extends React.Component {
    constructor(){
        super();
        this.state = {color:'Red'};

    }
    
 render() {
  
    return(
        <>
        <h1> My favourite car color is {this.state.color}</h1>
        <button onClick={()=>{this.setState({color:'Blue'})}}>Change Color</button>
        </>

    );
 }
}

export default FavouriteCar;