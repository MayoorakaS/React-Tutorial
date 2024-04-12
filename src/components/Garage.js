import Car from './Car';
import Apple from './Apple';
import CarList from './carList';
import { isVisible } from '@testing-library/user-event/dist/utils';


//function component.
function Garage() {
    const isdoorOpen = false;
    const isVisible = true;
    //attributes
    const brandName = 'Ferrari';
    //object 
    const carInfo ={year: 2022,
        price: '$300,000',
        horsepower: '700hp'}

    //attributes for class Apple    
    const appleInfo ={color:'green', type:'fuji'};
    //define conditional rendering
    const showInfo = appleInfo.color !== undefined && appleInfo.type !== undefined;

    //List of attributes
    const carList =[ {color:'Green',brand:'BMW'}, {color:'White',brand:'Tesla'},{color:'Black',brand:'Toyoto'}]
 
    const country =['United States',
        'Brazil',
        'India',
        'China',
       'Russia',
        'Australia'];


    return( 
    <>
        <h1> Who lives in the Garage?</h1>
        {/* passes two props to the <Car> component: */}
        <Car brand={brandName} color="Yellow" carInfo={carInfo}/>
        {/* Conditional rendering using ternary operator */}
        {appleInfo.color !== undefined && appleInfo.type !== undefined ?   <Apple  appleInfo={appleInfo}/>:null}

        {/* Conditional rendering using ternary operator using AND operator*/}
        {isVisible && <h5>The door is closed</h5>}

        {isdoorOpen ? <h4>The Garage door is open</h4> : <h4> The Garage door is closed</h4>}
        {showInfo? <h5>Apple color is {appleInfo.color}</h5>:null}
      
       <ul>
       { carList.map((carList) =><li key={carList.brand} ><CarList carList = {carList}/></li>)}
       </ul>
       <ol>
        {country.map((e,index)=><li style={{ textAlign:'start' }} key={index}>{e}</li>)}
       </ol>

    </>
        );
}

export default Garage;