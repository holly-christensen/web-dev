import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index.js"
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem.js"
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList.js"
import PostSummaryListItem from "./PostSummaryList/PostSummaryListItem.js"
import ExploreScreen from "./ExploreScreen/index.js"

const Tuiter = () => {
    return(
      <>
            <h1>Tuiter</h1>
            <ExploreScreen/>
             {/*<PostSummaryListItem post={{
                 "topic": "Web Development",
                 "userName": "",
                 "title": "jQuery",
                 "time": "last week",
                 "image": "./images/jquery.png",
                 "tweets": "122K"
             }}/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem who={{
             avatarIcon: './images/virgin-logo.png',
             userName: 'Virgin Galactic',
             handle: 'virgingalactic',
                         }}/>*/}
             <WhoToFollowList/>
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
