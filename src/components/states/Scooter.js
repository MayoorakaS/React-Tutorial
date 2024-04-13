import { useState } from "react";

function Scooter(){
    const myStyle = {
        textAlign: "start",
        fontFamily: "Sans-Serif",
        fontSize: "20px",
        color:"lightblue"
    }
    const [scooter, setScooter] = useState({
        color: "black",
        brand : "Honda",
        model: "Activa",
        weight:100
    });

    function updateColor(){
        setScooter(previousState =>{
            return{...previousState, color:"Blue"};
        })
    }
    return (
        <>
         <h1>Hello Scooter</h1>
         <ul style={myStyle}>
             <li>Color : {scooter.color}</li>
             <li>Brand : {scooter.brand}</li>
             <li>Model : {scooter.model}</li>
             <li>Weight : {scooter.weight}</li>
             <button onClick={updateColor}>Change color</button>
         </ul>
        </>
    )
}

export default Scooter;