const TuitListItem = (
    {
        tuit = {
               "_id": "567",
               "topic": "Space",
               "postedBy": {
                 "username": "SpaceX"
                  },
               "liked": false,
               "verified": false,
               "handle": "spacex",
               "title": "",
               "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
               "attachments": {
                 "image": "../images/starship.png"
                    },
               "time": "last month",
               "logoImage": "../images/node.png",
               "avatarImage": "../images/node.png",
               "tuits": "120K",
               "stats": {
                 "comments": 123,
                 "retuits": 234,
                 "likes": 345
               }
             }
    }) => {
    return (
            <li>
            <div className={"list-group-item"}>
                  <div className={"float-start mr-3"}>
                    <img src={tuit.avatarImage} width="48" className="rounded-circle float-start" alt={`${tuit.userName} profile`}/>
                  </div>
                    {/*<button
                      type="button"
                      className={"btn btn-primary rounded-pill float-end mt-1"}
                    >
                      Follow
                    </button>*/}
                    <div className={"mx-0"}>
                      <p className={"fw-bold my-0 py-0"}>{tuit.postedBy.userName}</p>
                      <p className={"text-muted my-0 py-0"}>@{tuit.handle}</p>
                    </div>
                    <p className={"my-0 py-0"}>@{tuit.tuit}</p>
                    <img src={tuit.image}/>

                  </div>
            </li>

      )
  };

  export default TuitListItem;
