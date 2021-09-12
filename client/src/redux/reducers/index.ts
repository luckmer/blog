import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import registerReducer from "./registerReducer";
import PostSlice from "./Posts";
import PaginationSlice from "./paginationReducer";

const Index = combineReducers({
  registration: registerReducer,
  pagination: PaginationSlice,
  user: UserReducer,
  posts: PostSlice,
});

export default Index;
