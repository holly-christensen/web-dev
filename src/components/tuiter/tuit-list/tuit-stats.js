import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="wd-tuit-block-action-list">
                <div className="wd-tuit-block-action">
                    <a href="reply.html">
                        <i className="fa fa-comment p-1 pe-2"> </i>
                        <p>{tuit.stats.comments}</p>
                    </a>
                </div>
                <div className="wd-tuit-block-action">
                    <a href="retuit.html">
                        <i className="fa fa-retweet p-1 pe-2"> </i>
                        <p>{tuit.stats.retuits}</p>
                    </a>
                </div>
                <div className="wd-tuit-block-action">
                    {tuit.liked &&
                        <i className="fas fa-heart me-1"
                           style={{color: '#FA1980'}}
                           onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               liked: false,
                               stats: {
                                   ...tuit.stats,
                                   likes: tuit.stats.likes - 1
                               }
                           })}>
                        </i>
                    }
                    {!tuit.liked &&
                        <i className="far fa-heart me-1"
                           onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               liked: true,
                               stats: {
                                   ...tuit.stats,
                                   likes: tuit.stats.likes + 1
                               }
                           })}

                        > </i>
                    }
                    {tuit.stats && tuit.stats.likes}
                </div>
                <div className="wd-tuit-block-action">
                    {tuit.disliked &&
                        <i className="fas fa-thumbs-down me-1"
                           style={{color: 'rgb(29,161,242)'}}
                           onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               disliked: false,
                               stats: {
                                   ...tuit.stats,
                                   dislikes: tuit.stats.dislikes - 1
                               }
                           })}>
                        </i>
                    }
                    {!tuit.disliked &&
                        <i className="fas fa-thumbs-down me-1"
                           onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               disliked: true,
                               stats: {
                                   ...tuit.stats,
                                   dislikes: tuit.stats.dislikes + 1
                               }
                           })}

                        > </i>
                    }
                    {tuit.stats && tuit.stats.dislikes}
                </div>
                <div className="wd-tuit-block-action">
                    <a href="share.html">
                        <i className="fa fa-share p-1 pe-2"> </i>
                        <p></p>
                    </a>
                </div>
            </div>

        </div>
    );
}
export default TuitStats;



