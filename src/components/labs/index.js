import React from "react";
import {Link} from "react-router-dom";
import Classes from "classes/index.js"
import Styles from "./styles";


const Labs = () => {
    return(
        <h1>Labs</h1>

        <ConditionalOutput/>
        <Styles/>
        <Classes/>

        <Link to="/hello">
              Hello
        </Link> |
        <Link to="/tuiter">
              Tuiter
        </Link>

    )
};

export default Labs;

