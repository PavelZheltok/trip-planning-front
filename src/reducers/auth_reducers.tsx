import * as AuthConstants from './../constants';
import {userConstants} from './../constants';
import {IUser} from "../interfaces/interfaces";

export interface IAuthAction {
    type:string,
}

const user = {
    email: '',
    password: '',
    userName: '',
    token: ''
};

const defaultState = { user, isLoading: false };

const auth = (state = defaultState, action: IAuthAction) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state
    }
};

export default auth;