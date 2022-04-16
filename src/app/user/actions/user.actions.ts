import { createAction, props } from '@ngrx/store';
import { GroupDTO } from 'src/app/group/models/group.dto';
import { InvitationDTO } from '../models/invitation.dto';
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

export const getInvitations = createAction(
  '[User] get user invitations',
  props<{ user_id: string }>()
);

export const getInvitationsSuccess = createAction(
  '[User] get user invitations success',
  props<{ invitations: InvitationDTO[] }>()
);

export const acceptInvitation = createAction(
  '[User] accept invitation',
  props<{ invitation_id: string }>()
);

export const acceptInvitationSuccess = createAction(
  '[User] accept invitation success',
  props<{ invitation_id: string }>()
);

export const deleteInvitation = createAction(
  '[User] delete invitation',
  props<{ invitation_id: string }>()
);

export const deleteInvitationSuccess = createAction(
  '[User] delete invitatio success',
  props<{ invitation_id: string }>()
);

export const updateUser = createAction(
  '[User] update user',
  props<{ user: UserDTO }>()
);

export const updateUserSuccess = createAction(
  '[User] update user success',
  props<{ user: UserDTO }>()
);

export const deleteUser = createAction(
  '[User] delete user',
  props<{ user_id: string }>()
);

export const deleteUserSuccess = createAction(
  '[User] delete user success',
);