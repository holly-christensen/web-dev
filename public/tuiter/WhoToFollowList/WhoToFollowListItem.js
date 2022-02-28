// Now let's focus on the right sidebar. Under the tuiter directory, in a new folder called WhoToFollowList, create an WhoToFollow ListItem.js file that implements a function called WhoToFollowListItem that accepts a parameter called who. The parameter represents a single user we might want to follow. The function should return an HTML string that renders as shown above. The data in the who parameter contains properties that describe each user such as avatarIcon, userName, and handle. Feel free to re-use the HTML you wrote for the previous assignment. An example of the object who used to render the sample image is shown below.

    // {   avatarIcon: '../../images/virgin.png', userName: 'Virgin Galactic', handle: 'virgingalactic', },

  const WhoToFollowListItem = (who) => {
    return (`
      <div class="list-group-item">
        <img src="images/${who.avatarIcon}" width="48" class="float-start rounded-pill mx-0">
        <button
          type="button"
          class="btn btn-primary rounded-pill float-end mt-1"
        >
          Follow
        </button>
        <div class="mx-0">
          <p class="fw-bold my-0 py-0">${who.userName}</p>
          <p class="text-muted my-0 py-0">@${who.handle}</p>
        </div>

      </div>

      `)
  };
