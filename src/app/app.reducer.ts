import { ActionReducerMap } from "@ngrx/store";
import * as authReducer from './auth/reducers';
import * as userReducer from './user/reducers';
import * as groupReducer from './group/reducers';

export interface AppState {
	auth: authReducer.AuthState,
	user: userReducer.UserState,
	group: groupReducer.GroupState,
}

export const appReducers: ActionReducerMap<AppState> = {
	auth: authReducer.authReducer,
	user: userReducer.userReducer,
	group: groupReducer.groupReducer,
};