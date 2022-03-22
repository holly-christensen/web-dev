import PostSummaryListItem from "./PostSummaryListItem.js"
const posts = require('./posts.json');


const PostSummaryList = () => {
  return(
    <ul>
      {
        posts.map(post => {
          return(<PostSummaryListItem post={post}/>);
        })
      }
    </ul>
  );
}
export default PostSummaryList;