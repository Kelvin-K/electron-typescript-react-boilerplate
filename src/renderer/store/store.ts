import { combineReducers, createStore } from "redux";
import IAppState from "../interfaces/IAppState";
import { UserReducer } from "./reducers/user";

const store = createStore(
    combineReducers<IAppState>(
        {
            user: UserReducer,
        },
    ),
);

export default store;
