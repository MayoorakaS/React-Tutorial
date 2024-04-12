import Car from './Car';
import Apple from './Apple';


//function component.
function Garage() {
    return( 
    <>
        <h1> Who lives in the Garage?</h1>
        <Car/>
        <Apple />

    </>
        );
}

export default Garage;