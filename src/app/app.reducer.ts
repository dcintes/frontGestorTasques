import { ActionReducerMap } from "@ngrx/store";
import * as authReducer from './auth/reducers';
import * as userReducer from './user/reducers';

export interface AppState {
	auth: authReducer.AuthState,
	user: userReducer.UserState,
}

export const appReducers: ActionReducerMap<AppState> = {
	auth: authReducer.authReducer,
	user: userReducer.userReducer,
};