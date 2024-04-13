import './header.css';
import styles from './header.module.css'

function Header(){
    const myStyle = {
        fontFamily: "Helvetica",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: "10px",
        color:"red",
    }
    
    return (
    <>
    <h1 style={myStyle}> Hello, Do the styling here </h1>
    <h1 className={styles.bigblue}>Module styling</h1>
    <p>This is header class </p>
    </>
    )
}

export default Header