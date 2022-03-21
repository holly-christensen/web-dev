import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
    <React.Fragment>
        <h1>Hello World!</h1>
          <Link to="/">
              Labs
          </Link> |
          <Link to="/tuiter">
              Tuiter
          </Link>
          </React.Fragment>

    )
};

export default HelloWorld;
