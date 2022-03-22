const PostSummaryListItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "./images/react-blue.png"
        }
    }) => {
    return (
            <>
            <div className="card py-2 px-3 d-flex">

            <div>
                <img
                 src={post.image}
                 width="75px"
                 className="rounded float-end"
                 alt={post.userName}
                 />

            <p className="text-muted p-0 m-0">{post.topic}</p>
              <div className={"d-inline-flex"}>
                <p className={"fw-bold p-0 m-0"}>{post.userName}</p>
                <i className={"fa fa-check-circle p-1"}></i>
                <p className={"text-muted p-0 m-0"}>– {post.time}</p>
              </div>
              <p className={"fw-bold p-0 m-0"}>
                {post.title}
            </p>
                </div>
            </div>
            </>

      )
  };

  export default PostSummaryListItem;
