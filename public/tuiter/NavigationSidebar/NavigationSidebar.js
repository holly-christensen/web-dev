const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                        <a href="home.html" class="list-group-item list-group-item-action d-inline-flex">
                          <i class="fa fa-home p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Home</p>
                        </a>
                        <a
                          href="explore.html"
                          class="list-group-item list-group-item-action active d-inline-flex"
                          aria-current="true"
                        >
                          <i class="fa fa-hashtag p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Explore</p>
                        </a>
                        <a
                          href="notifications.html"
                          class="list-group-item list-group-item-action d-inline-flex"
                          >
                          <i class="fa fa-bell p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Notifications</p></a
                        >
                        <a
                          href="messages.html"
                          class="list-group-item list-group-item-action d-inline-flex"
                          ><i class="fa fa-envelope p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Messages</p></a
                        >
                        <a
                          href="bookmarks.html"
                          class="list-group-item list-group-item-action d-inline-flex"
                          ><i class="fa fa-bookmark p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Bookmarks</p></a
                        >
                        <a href="lists.html" class="list-group-item list-group-item-action d-inline-flex"
                          ><i class="fa fa-list-ul p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Lists</p></a
                        >
                        <a
                          href="profile.html"
                          class="list-group-item list-group-item-action d-inline-flex"
                          ><i class="fa fa-user-alt p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">Profile</p></a
                        >
                        <a
                          href="#"
                          class="list-group-item list-group-item-action d-inline-flex"
                          ><i class="fas fa-circle p-1"></i>
                          <p class="p-0 m-0 d-none d-xl-block">More</p></a
                        >
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;