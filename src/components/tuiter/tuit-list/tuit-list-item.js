import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats.js"



const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();

  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };

  const likedStatus = tuit.liked ? "wd-tweet-action-heart-active" : "";

    return (
            <li>
            <div className={"list-group-item position-relative"}>

                  <div className="position-absolute top-0 end-0 p-2"
                       onClick={() => deleteTuit}>
                    <i onClick={() =>
                           deleteTuit(tuit)}
                           className="fa fa-trash-alt p-2"></i>
                  </div>

                  <div className={"me-2 float-start"}>
                    <img src={tuit.avatarImage} width="48" className="rounded-circle" alt={`${tuit.handle}`}/>
                  </div>
                  <div className={"mx-0 ms-2 mb-2"}>
                      <p className={"fw-bold my-0 py-0 "}>{tuit.postedBy.username}</p>
                      <p className={"text-muted my-0 py-0"}>@{tuit.handle}</p>
                      <p className={"my-0 py-0 ms-5"}>{tuit.tuit}</p>
                      {tuit.attachments &&
                            (<img src={tuit.attachments.image} className={"img-fluid ms-5 mt-3 w-75 attachment-image"} alt={"attachment"}/>)}
                  </div>
                  <TuitStats tuit={tuit}/>
            </div>
            </li>

      )
  };

  export default TuitListItem;
