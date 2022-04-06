import { AuthDTO } from "../models/auth.dto";
import { createReducer, on } from '@ngrx/store';
import * as authActions from "../actions";


export interface AuthState {
  auth: AuthDTO,
  loading: boolean;
  loaded: boolean;
  error: any;
  action: string;
}

export const initialState: AuthState = {
  auth: new AuthDTO('',''),
  loading: false,
  loaded: false,
  error: null,
  action: '',
}

const _authReducer = createReducer(
  initialState,
  on(authActions.login, (state, {auth}) => ({
    ...state,
    loading: true,
    loaded: false,
    auth: auth,
    action: 'login',
  })),
  on(authActions.loginSuccess, (state, {auth}) => ({
    ...state,
    loading: false,
    loaded: true,
    auth: auth
  })),
  on(authActions.loginError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  on(authActions.logout, (state) => (
    initialState
  )),
);

export function authReducer(state: any, action: any) {
	return _authReducer(state, action);
}