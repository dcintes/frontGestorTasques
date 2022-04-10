import { createAction, props } from '@ngrx/store';
import { UserDTO } from '../models/user.dto';

export const getUser = createAction(
  '[User] get user',
  props<{ id: string }>()
);

export const getUserSuccess = createAction(
  '[User] get user',
  props<{ user: UserDTO }>()
);

export const error = createAction(
  '[User] error',
  props<{ payload: any }>()
);