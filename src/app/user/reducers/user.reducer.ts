import { createReducer, on } from '@ngrx/store';
import { GroupDTO } from 'src/app/group/models/group.dto';
import * as userActions from "../actions";
import { InvitationDTO } from '../models/invitation.dto';
import { UserDTO } from '../models/user.dto';

export interface UserState {
  user: UserDTO,
  groups: GroupDTO[],
  invitations: InvitationDTO[],
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

// Estat inicial
export const initialState: UserState = {
  user: new UserDTO('','','',new Date(), new Date()),
  groups: [],
  invitations: [],
	loading: false,
  loaded: false,
  error: null,
  payload: null,
};

const _userReducer = createReducer(
  initialState,
  on(userActions.getUser, (state, {id}) => ({
		...state,
		user: new UserDTO(id,'','',new Date(), new Date()),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(userActions.getUserSuccess, (state, {user}) => ({
    ...state,
    user: user,
    loading: false,
    loaded: true,
  })),
  on(userActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),

  on(userActions.getGroups, (state, {user_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
	})),
  on(userActions.getGroupsSuccess, (state, {groups}) => ({
    ...state,
    groups: groups,
    loading: false,
    loaded: true,
  })),

  on(userActions.getInvitations, (state, {user_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
	})),
  on(userActions.getInvitationsSuccess, (state, {invitations}) => ({
    ...state,
    invitations: invitations,
    loading: false,
    loaded: true,
  })),

  on(userActions.deleteInvitation, (state, {invitation_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
	})),
  on(userActions.deleteInvitationSuccess, (state, {invitation_id}) => ({
    ...state,
    invitations: state.invitations.filter(invitation => invitation.id !== invitation_id),
    loading: false,
    loaded: true,
  })),

  on(userActions.acceptInvitation, (state, {invitation_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(userActions.acceptInvitationSuccess, (state, {invitation_id}) => ({
    ...state,
    invitations: state.invitations.filter(invitation => invitation.id !== invitation_id),
    loading: false,
    loaded: true,
    payload: {
      action: 'acceptInvitationSuccess',
      invitation: state.invitations.find(invitation => invitation.id === invitation_id)
    }
  })),
  on(userActions.updateUser, (state, {user}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(userActions.updateUserSuccess, (state, {user}) => ({
    ...state,
    user: user,
    loading: false,
    loaded: true,
    payload: {
      action: 'updateUserSuccess',
    }
  })),
  on(userActions.deleteUser, (state, {user_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(userActions.deleteUserSuccess, (state) => ({
    ...initialState, 
    payload: {
      action: 'deleteUserSuccess',
    }
  })),

  on(userActions.cleanPayload, (state) => ({
    ...state,
    payload: null
  })),
);

export function userReducer(state: any, action: any) {
	return _userReducer(state, action);
}