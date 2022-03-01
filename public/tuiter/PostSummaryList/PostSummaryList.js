import { PostSummaryListItem } from "./PostSummaryListItem.js";
import posts from "./posts.js";

export const PostSummaryList = () => {
    return (`
            <ul class="list-group">
            ${posts.map((post) => `<li>${PostSummaryListItem(post)}</li>`).join("")}
            </ul>
`); }
