function CarList(props){
const {carList} = props;
const {color,brand} = carList;
    return (
    <>
    <h4>{color} | {brand}</h4>
    </>)
}

export default CarList