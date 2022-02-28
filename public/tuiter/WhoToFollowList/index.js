// In the same WhoToFollowList directory, in a an index.js file, implement a function called the same as the file that renders a list of people as shown here on the right.
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            ${who.map((user) => `<li>${WhoToFollowListItem(user)}</li>`).join("")}
            </ul>
`); }
