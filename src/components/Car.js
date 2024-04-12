function Car(props){
    //get brand,color from the all props | destructuring props
    const {brandName, colorofCar,carInfo}= props
    
    const text =`Hi, I am a ${colorofCar} ${brandName}Car.`;
    const properties =` It's properties are  year: ${carInfo.year}  price:  ${carInfo.price} horsepower :${carInfo.horsepower}`;

    return (
        <>
            <h2>{text}</h2> 
            <h2>{properties}</h2>
        </>
        
    );
}

export default Car;