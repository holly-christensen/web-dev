import React from "react";
import { Link } from "react-router-dom";
import ExploreScreen from "./explore-screen/index.js"

const Tuiter = () => {
    return(
      <>
            <h1>Tuiter</h1>
            <ExploreScreen/>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/">
              Labs
          </Link>
      </>
    )
};

export default Tuiter;
