import { createAction, props } from '@ngrx/store';
import { GroupDTO } from 'src/app/group/models/group.dto';
import { UserDTO } from '../models/user.dto';

export const getUser = createAction(
  '[User] get user',
  props<{ id: string }>()
);

export const getUserSuccess = createAction(
  '[User] get user success',
  props<{ user: UserDTO }>()
);

export const error = createAction(
  '[User] error',
  props<{ payload: any }>()
);

export const getGroups = createAction(
  '[User] get user groups',
  props<{ user_id: string }>()
);

export const getGroupsSuccess = createAction(
  '[User] get user groups success',
  props<{ groups: GroupDTO[] }>()
);