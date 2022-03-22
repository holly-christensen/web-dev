import React from "react";


const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className={"list-group"}>
                <a className={"list-group-item"} href="/">
                    <i className={"fab fa-twitter"}></i></a>
                        <a href="home.html" className={"list-group-item list-group-item-action d-inline-flex"}>
                          <i className={"fa fa-home p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Home</p>
                        </a>
                        <a
                          href="explore.html"
                          className={"list-group-item list-group-item-action active d-inline-flex"}
                          aria-current="true"
                        >
                          <i className={"fa fa-hashtag p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Explore</p>
                        </a>
                        <a
                          href="notifications.html"
                          className={"list-group-item list-group-item-action d-inline-flex"}
                          >
                          <i className={"fa fa-bell p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Notifications</p></a
                        >
                        <a
                          href="messages.html"
                          className={"list-group-item list-group-item-action d-inline-flex"}
                          ><i className={"fa fa-envelope p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Messages</p></a
                        >
                        <a
                          href="bookmarks.html"
                          className={"list-group-item list-group-item-action d-inline-flex"}
                          ><i className={"fa fa-bookmark p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Bookmarks</p></a
                        >
                        <a href="lists.html" className={"list-group-item list-group-item-action d-inline-flex"}
                          ><i className={"fa fa-list-ul p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Lists</p></a
                        >
                        <a
                          href="profile.html"
                          className={"list-group-item list-group-item-action d-inline-flex"}
                          ><i className={"fa fa-user-alt p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>Profile</p></a
                        >
                        <a
                          href="#"
                          className={"list-group-item list-group-item-action d-inline-flex"}
                          ><i className={"fas fa-circle p-1"}></i>
                          <p className={"p-0 m-0 d-none d-xl-block"}>More</p></a
                        >
            </div>
            <div className={"d-grid mt-2"}>
                <a href="tweet.html"
                   className={"btn btn-primary btn-block rounded-pill"}>
                    Tweet</a>
            </div>
            </>
    );
}
export default NavigationSidebar;