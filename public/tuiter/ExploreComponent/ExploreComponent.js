import { PostSummaryList } from "../PostSummaryList/PostSummaryList.js";


const ExploreComponent = () => {
    return(`
            <div class="row">
             <div class="d-flex">
               <div class="input-group mb-3 border rounded-pill bg-white  mx-2 ml-0">
                 <span
                   class="input-group-text bg-transparent border-0"
                   id="basic-addon1"
                   ><i class="fa fa-search"></i
                 ></span>
                 <input
                   type="text"
                   class="form-control bg-transparent border-0 rounded-right "
                   placeholder="Search Tuiter"
                   aria-label="Search Tuiter"
                   aria-describedby="basic-addon1"
                 />
               </div>
               <i class="fa fa-cog fa-2x wd-cog"></i>
             </div>
           </div>
           <ul class="nav mb-2 nav-tabs">

              <li class="nav-item">
                <a class="nav-link active" href="explore-for-you.html">For You</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="explore-trending.html">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="explore-news.html">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="explore-sports.html">Sports</a>
              </li>
              <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="explore-entertainment.html"
                  >Entertainment</a
                >
              </li>

           </ul>
           <div class="card text-white border-0 px-0">
             <img
               src="../images/starship.jpeg"
               class="card-img"
               alt="SpaceX Starship"
             />
             <div
               class="card-img-overlay h-100 d-flex flex-column justify-content-end"
             >
               <h3 class="card-title">SpaceX's Starship</h3>
             </div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
