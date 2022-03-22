import WhoToFollowListItem from "./WhoToFollowListItem.js"
import whos from "./who.json";

const WhoToFollowList = () => {
  return(
    <ul>
      {
        whos.map(post => {
          return(<WhoToFollowListItem who={who}/>);
        })
      }
    </ul>
  );
}
export default WhoToFollowList;
