import { createAction, props } from '@ngrx/store';
import { AuthDTO } from '../models/auth.dto';
import { RegisterDTO } from '../models/register.dto';

export const login = createAction(
  '[Auth] login',
  props<{ auth: AuthDTO }>()
);

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ auth: AuthDTO }>()
);

export const error = createAction(
  '[Auth] error',
  props<{ payload: any }>()
);

export const pushAuth = createAction(
  '[Auth] Inicialitza auth si es troba en local storage',
  props<{ auth: AuthDTO }>()
);

export const logout = createAction(
  '[Auth] logout'
);

export const register = createAction(
  '[Auth] register',
  props<{ register: RegisterDTO }>()
);

export const registerSuccess = createAction(
  '[Auth] register success',
  props<{ auth: AuthDTO }>()
);