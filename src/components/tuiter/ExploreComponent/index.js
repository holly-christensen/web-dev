import PostSummaryList from "../PostSummaryList/PostSummaryList.js";


const ExploreComponent = () => {
    return(
            <>
            <div className={"row"}>
             <div className={"d-flex"}>
               <div className={"input-group mb-3 border rounded-pill bg-white  mx-2 ml-0"}>
                 <span
                   className={"input-group-text bg-transparent border-0"}
                   id="basic-addon1"
                   ><i className={"fa fa-search"}></i
                 ></span>
                 <input
                   type="text"
                   className={"form-control bg-transparent border-0 rounded-right"}
                   placeholder="Search Tuiter"
                   aria-label="Search Tuiter"
                   aria-describedby="basic-addon1"
                 />
               </div>
               <i className={"fa fa-cog fa-2x wd-cog"}></i>
             </div>
           </div>
           <ul className={"nav mb-2 nav-tabs"}>

              <li className={"nav-item"}>
                <a className={"nav-link active"} href="explore-for-you.html">For You</a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="explore-trending.html">Trending</a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="explore-news.html">News</a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="explore-sports.html">Sports</a>
              </li>
              <li className={"nav-item d-none d-md-block"}>
                <a className={"nav-link"} href="explore-entertainment.html"
                  >Entertainment</a
                >
              </li>

           </ul>
           <div className={"card text-white border-0 px-0"}>
             <img
               src="./images/starship.jpeg"
               className={"card-img"}
               alt="SpaceX Starship"
             />
             <div
               className={"card-img-overlay h-100 d-flex flex-column justify-content-end"}
             >
               <h3 className={"card-title"}>SpaceX's Starship</h3>
             </div>
           </div>
           <PostSummaryList/>
           </>
    );
}
export default ExploreComponent;
