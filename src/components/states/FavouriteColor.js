import {useState} from 'react';

function FavouriteColor(){
    // let color = 'blue';
    const [color, setColor] = useState('blue');
    return (
    <> 
    <h1> My favourite color is {color}</h1>
    <button onClick = {()=>{setColor('Red')}}> Change color</button>
    </>
    );
}

export default FavouriteColor;