const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../images/nasa-logo.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return (
      <div className={"list-group-item"}>
      <div className={"float-start mr-3"}>
        <img src={who.avatarIcon} width="48" className="rounded-circle float-start" alt="profile-image"/>
      </div>
        <button
          type="button"
          className={"btn btn-primary rounded-pill float-end mt-1"}
        >
          Follow
        </button>
        <div className={"mx-0"}>
          <p className={"fw-bold my-0 py-0"}>{who.userName}</p>
          <p className={"text-muted my-0 py-0"}>@{who.handle}</p>
        </div>

      </div>

      )
  };
export default WhoToFollowListItem;