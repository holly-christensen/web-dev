import tuits from "../data/tuits.json";
import { DELETE_TUIT, CREATE_TUIT, FIND_ALL_TUITS, FIND_TUIT_BY_ID, UPDATE_TUIT} from "../actions/tuits-actions";

const tuitsReducer =
    (state = [], action) => {
        switch (action.type) {
            case FIND_ALL_TUITS:
                return action.tuits;
            case DELETE_TUIT:
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);
            case CREATE_TUIT:
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        username: "User Name"
                    },
                    handle: "userhandle",
                    logoImage: "images/default-profile.jpeg",
                    avatarImage: "images/default-profile.jpeg",
                    stats: {
                        retuits: 111,
                        likes: 222,
                        comments: 333
                    }
                }
                return [
                    newTuit,
                    ...state,
                ];
            case 'like-tuit':
                return state.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });

            default:
                return state
        }
    }


export default tuitsReducer;