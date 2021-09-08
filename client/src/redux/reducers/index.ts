import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import registerReducer from "./registerReducer";
import PostSlice from "./Posts";

const Index = combineReducers({
  registration: registerReducer,
  user: UserReducer,
  posts: PostSlice,
});

export default Index;
