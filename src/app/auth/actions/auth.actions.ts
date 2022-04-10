import { createAction, props } from '@ngrx/store';
import { AuthDTO } from '../models/auth.dto';

export const login = createAction(
  '[Auth] login',
  props<{ auth: AuthDTO }>()
);

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ auth: AuthDTO }>()
);

export const loginError = createAction(
  '[Auth] login error',
  props<{ payload: any }>()
);

export const pushAuth = createAction(
  '[Auth] Inicialitza auth si es troba en local storage',
  props<{ auth: AuthDTO }>()
);

export const logout = createAction(
  '[Auth] logout'
);