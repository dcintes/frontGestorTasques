import { Action, createReducer, on } from '@ngrx/store';
import { UserDTO } from '../models/user.dto';
import * as userActions from "../actions";

export interface UserState {
  user: UserDTO,
	loading: boolean;
  loaded: boolean;
  error: any;
}

// Estat inicial
export const initialState: UserState = {
  user: new UserDTO('','','',new Date(), new Date()),
	loading: false,
  loaded: false,
  error: null
};

const _userReducer = createReducer(
  initialState,
  on(userActions.getUser, (state, {id}) => ({
		...state,
		user: new UserDTO(id,'','',new Date(), new Date()),
    loading: true,
    loaded: false,
    error: null,
	})),
  on(userActions.getUserSuccess, (state, {user}) => ({
    ...state,
    user: user,
    loading: false,
    loaded: true,
  })),
  on(userActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
);

export function userReducer(state: any, action: any) {
	return _userReducer(state, action);
}