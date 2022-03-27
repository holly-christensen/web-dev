import WhoToFollowListItem from "./who-to-follow-list-item.js"
import whos from "./who.json";

const WhoToFollowList = () => {
  return(
    <ul>
      {
        whos.map(who => {
          return(<WhoToFollowListItem who={who}/>);
        })
      }
    </ul>
  );
}
export default WhoToFollowList;
