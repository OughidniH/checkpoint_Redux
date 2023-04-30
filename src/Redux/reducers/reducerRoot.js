import { combineReducers } from "redux";
import reducersToDo from "./reducerToDo";

const reducerRoot = combineReducers({ reducersToDo });



export default reducerRoot