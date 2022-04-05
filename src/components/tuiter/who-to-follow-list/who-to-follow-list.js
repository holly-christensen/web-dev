import WhoToFollowListItem
       from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return(
  <>
    <ul className="ttr-tuits list-group">
          {
            who.map && who.map(user =>
              <WhoToFollowListItem key={user._id}
                            who={user}/>)
          }
        </ul>
  </>
  );
};
export default WhoToFollowList;