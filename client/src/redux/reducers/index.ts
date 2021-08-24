import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const Index = combineReducers({
  user: UserReducer,
});

export default Index;
