import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

class Apple extends React.Component {
    render() {
        return(   
        <h6>
            This is class component, Here i use return within render(){} .
            Also this class should be extends with react component.
        </h6>
        )
    }

}

export default Apple;
