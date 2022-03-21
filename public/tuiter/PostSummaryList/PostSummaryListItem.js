export const PostSummaryListItem = (post) => {
    return (`
            <div class="card py-2 px-3 d-flex">

            <div>
                <img
                 src=${post.image}
                 width="75px"
                 class="rounded float-end"
                 alt=${post.userName}
                 />

            <p class="text-muted p-0 m-0">${post.topic}</p>
              <div class="d-inline-flex">
                <p class="fw-bold p-0 m-0">${post.userName}</p>
                <i class="fa fa-check-circle p-1"></i>
                <p class="text-muted p-0 m-0">– ${post.time}</p>
              </div>
              <p class="fw-bold p-0 m-0">
                ${post.title}
            </p>
                </div>
            </div>

      `)
  };
