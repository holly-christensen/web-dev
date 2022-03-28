import React from "react";
import {Link} from "react-router-dom";
import Classes from "../labs/classes/index.js"
import ConditionalOutput from "./conditional-output/index.js"
import TodoItem from "./todo/TodoItem.js"
import TodoList from "./todo/TodoList.js"
import ReduxExamples from "./redux-examples";
import Styles from "./styles";


const Labs = () => {
    return(
    <div>
        <h1>Labs</h1>

        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>
        <ReduxExamples/>

        <Link to="/hello">
              Hello
        </Link> |
        <Link to="/tuiter">
              Tuiter
        </Link>
    </div>

    )
};

export default Labs;

