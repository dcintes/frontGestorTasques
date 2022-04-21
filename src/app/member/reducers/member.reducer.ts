import { createReducer, on } from '@ngrx/store';
import * as memberActions from "../actions";
import { MemberDTO } from "../models/member.dto";

export interface MemberState {
  member: MemberDTO,
  members: MemberDTO[],
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

// Estat inicial
export const initialState: MemberState = {
  member: new MemberDTO('','',false,0),
  members: [],
	loading: false,
  loaded: false,
  error: null,
  payload: null,
};

const _memberReducer = createReducer(
  initialState,
  on(memberActions.getMember, (state, {group_id, member_id}) => ({
		...state,
		member: new MemberDTO(member_id,'',false,0),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(memberActions.getMemberSuccess, (state, {member}) => ({
    ...state,
    member: member,
    loading: false,
    loaded: true,
  })),
  on(memberActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  
  on(memberActions.deleteMember, (state, {group_id, member_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(memberActions.deleteMemberSuccess, (state, {}) => ({
    ...initialState,
    payload: {
      action: 'deleteMemberSuccess',
      group_id: state.member.group_id,
    }
  })),

  on(memberActions.listMembers, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(memberActions.listMembersSuccess, (state, {members}) => ({
    ...state,
    members: members,
    loading: false,
    loaded: true,
  })),

);

export function memberReducer(state: any, action: any) {
	return _memberReducer(state, action);
}