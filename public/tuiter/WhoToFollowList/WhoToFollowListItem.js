export const WhoToFollowListItem = (who) => {
    return (`
      <div class="list-group-item">
      <div class="float-start mr-3">
              <img src="images/${who.avatarIcon}" width="48" class="rounded-pill me-2">
      </div>
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
