import React from "react";
import {Link} from "react-router-dom";
import Classes from "../labs/classes/index.js"
import ConditionalOutput from "./conditional-output/index.js"
import TodoItem from "./todo/TodoItem.js"
import TodoList from "./todo/TodoList.js"
import Styles from "./styles";


const Labs = () => {
    return(
    <React.Fragment>
        <h1>Labs</h1>

        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>

        <Link to="/hello">
              Hello
        </Link> |
        <Link to="/tuiter">
              Tuiter
        </Link>
    </React.Fragment>

    )
};

export default Labs;

