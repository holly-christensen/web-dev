import WhoToFollowListItem from "./WhoToFollowListItem.js"
const whos = require('./who.json');

const WhoToFollowList = () => {
     whos.map(who => {
         return(
             <WhoToFollowListItem who={who}/>
         );
     })
  };
export default WhoToFollowList;
