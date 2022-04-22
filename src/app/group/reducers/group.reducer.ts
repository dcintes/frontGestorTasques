import { createReducer, on } from '@ngrx/store';
import { GroupDTO } from 'src/app/group/models/group.dto';
import { MemberDTO } from 'src/app/member/models/member.dto';
import * as groupActions from "../actions";
import { StadisticsDTO } from '../models/stadistics.model';

export interface GroupState {
  group: GroupDTO,
  members: MemberDTO[],
  authMember: MemberDTO,
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
  selectedTab: number;
  stadistics: StadisticsDTO,
}

// Estat inicial
export const initialState: GroupState = {
  group: new GroupDTO('','','','',new Date(), new Date()),
  members: [],
  authMember: new MemberDTO('','',false,0),
	loading: false,
  loaded: false,
  error: null,
  payload: null,
  selectedTab: 0,
  stadistics: new StadisticsDTO(),
};

const _groupReducer = createReducer(
  initialState,
  on(groupActions.getGroup, (state, {group_id}) => ({
		...state,
		group: new GroupDTO(group_id,'','','',new Date(), new Date()),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(groupActions.getGroupSuccess, (state, {group}) => ({
    ...state,
    group: group,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(groupActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  })),
  on(groupActions.getMembers, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(groupActions.getMembersSuccess, (state, {members}) => ({
    ...state,
    members: members,
    loading: false,
    loaded: true,
    error: null,
  })),

  on(groupActions.pushAuthMember, (state, {authMember}) => ({
    ...state,
    authMember: authMember,
  })),

  on(groupActions.createGroup, (state, {group}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(groupActions.createGroupSuccess, (state, {group}) => ({
    ...state,
    group: group,
    loading: false,
    loaded: true,
    error: null,
    payload: {
      action: 'createGroupSuccess',
      group_id: group.id,
    }
  })),

  on(groupActions.updateGroup, (state, {group}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(groupActions.updateGroupSuccess, (state, {group}) => ({
    ...state,
    group: group,
    loading: false,
    loaded: true,
    error: null,
    payload: {
      action: 'updateGroupSuccess',
    }
  })),

  on(groupActions.deleteGroup, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(groupActions.deleteGroupSuccess, (state) => ({
    ...initialState,
    payload: {
      action: 'deleteGroupSuccess',
    }
  })),

  on(groupActions.pushSelectedTab, (state, {selectedTab}) => ({
    ...state,
    selectedTab: selectedTab,
  })),

  on(groupActions.stadisticsGroup, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(groupActions.stadisticsGroupSuccess, (state, {stadistics}) => ({
    ...state,
    loading: false,
    loaded: true,
    stadistics: stadistics,
  })),

);

export function groupReducer(state: any, action: any) {
	return _groupReducer(state, action);
}
