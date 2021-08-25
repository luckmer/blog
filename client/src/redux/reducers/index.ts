import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import registerReducer from "./registerReducer";

const Index = combineReducers({
  user: UserReducer,
  registration: registerReducer,
});

export default Index;
