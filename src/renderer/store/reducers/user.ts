import { Reducer } from "redux";

export class UserState
{
    name: string = "Kelvin";
}

export type UserAction =
    { type: "XYZ" }

export const UserReducer: Reducer<UserState, UserAction> = (state: UserState = new UserState(), action: UserAction) =>
{
    switch (action.type)
    {
        default:
            return state;
    }
}