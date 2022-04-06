import { ActionReducerMap } from "@ngrx/store";
import * as authReducer from './auth/reducers'

export interface AppState {
	auth: authReducer.AuthState,
}

export const appReducers: ActionReducerMap<AppState> = {
	auth: authReducer.authReducer,
};