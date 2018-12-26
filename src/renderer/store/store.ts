import { combineReducers, createStore } from "redux";
import IAppState from "../interfaces/IAppState";
import { UserReducer } from "./modules/user";

const store = createStore(
    combineReducers<IAppState>(
        {
            user: UserReducer,
        },
    ),
);

export default store;
