import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

class Apple extends React.Component {
    render() {
        const {appleInfo} = this.props;
        const {color, type} = appleInfo;
        return( 
            
        <h6>
            This is class component, Here i use return within render(){} .
            Also this class should be extends with react component.
            This is {color}{type} apple.
        </h6>
        )
    }

}

export default Apple;
