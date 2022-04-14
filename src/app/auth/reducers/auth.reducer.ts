import { AuthDTO } from "../models/auth.dto";
import { createReducer, on } from '@ngrx/store';
import * as authActions from "../actions";
import { RegisterDTO } from "../models/register.dto";


export interface AuthState {
  auth: AuthDTO,
  register: RegisterDTO,
  loading: boolean;
  loaded: boolean;
  error: any;
  action: string;
}

export const initialState: AuthState = {
  auth: new AuthDTO('','','',''),
  register: new RegisterDTO('','','',''),
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
  on(authActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  on(authActions.pushAuth, (state, {auth}) => ({
    ...state,
    auth: auth,
  })),
  on(authActions.logout, (state) => (
    initialState
  )),
  on(authActions.register, (state, {register}) => ({
    ...state,
    loading: true,
    loaded: false,
    register: register,
    action: 'register',
  })),
  on(authActions.registerSuccess, (state, {auth}) => ({
    ...state,
    loading: false,
    loaded: true,
    auth: auth
  })),
);

export function authReducer(state: any, action: any) {
	return _authReducer(state, action);
}