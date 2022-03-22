import PostSummaryListItem from "./PostSummaryListItem.js"
//import * as posts from "./posts.json";
const posts = require('./posts.json');


const PostSummaryList = () => {
     posts.map(post => {
         return(
             <PostSummaryListItem post={post}/>
         );
     })
  };
export default PostSummaryList;
