import { Reducer } from "redux";
import StoreConstants from "../../constants/storeConstants";

export class UserState
{
    public name: string = "Kelvin";
}

export type UserAction =
    { type: typeof StoreConstants.xyz };

export const UserReducer: Reducer<UserState, UserAction> = (state: UserState = new UserState(), action: UserAction) =>
{
    switch (action.type)
    {
        default:
            return state;
    }
};
