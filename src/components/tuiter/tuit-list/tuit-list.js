import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {findAllTuits}
    from "../actions/tuits-actions";
import TuitListItem
       from "./tuit-list-item";

//import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);
    console.log("length"+tuits.length);
  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit => {
            console.log("in map rendering: "+tuit._id)
             return ( <TuitListItem key={tuit._id}
                            tuit={tuit}/>)

          })
      }
    </ul>
  );
}

export default TuitList;