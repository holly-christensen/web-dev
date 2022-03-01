import { WhoToFollowListItem } from "./WhoToFollowListItem.js";

import who from "./who.js";

export const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            ${who.map((user) => `<li>${WhoToFollowListItem(user)}</li>`).join("")}
            </ul>
`); }
