import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
<div>
    <div className="wd-tuit-block-action-list">
      <div className="wd-tuit-block-action">
        <a href="reply.html">
          <i className="fa fa-comment p-1 pe-2"></i>
          <p>{tuit.stats.comments}</p>
        </a>
      </div>
      <div className="wd-tuit-block-action">
        <a href="retuit.html">
          <i className="fa fa-retweet p-1 pe-2"></i>
          <p>{tuit.stats.retuits}</p>
        </a>
      </div>
      <div className="wd-tuit-block-action"
           onClick={likeTuit}>
           {
             tuit.liked &&
             <i className="fas fa-heart me-1"
                style={{color: 'red'}}></i>
           }
           {
             !tuit.liked &&
             <i className="far fa-heart me-1"></i>
           }
           {tuit.stats && tuit.stats.likes}
      </div>
      <div className="wd-tuit-block-action">
        <a href="share.html">
          <i className="fa fa-share p-1 pe-2"></i>
          <p></p>
        </a>
      </div>
    </div>

</div>
  );
}
export default TuitStats;



