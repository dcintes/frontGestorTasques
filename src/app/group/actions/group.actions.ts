import { createAction, props } from '@ngrx/store';
import { MemberDTO } from 'src/app/member/models/member.dto';
import { GroupDTO } from '../models/group.dto';
import { StadisticsDTO } from '../models/stadistics.model';

export const getGroup = createAction(
  '[Group] get group',
  props<{ group_id: string }>()
);

export const getGroupSuccess = createAction(
  '[Group] get group success',
  props<{ group: GroupDTO }>()
);

export const error = createAction(
  '[Group] error',
  props<{ payload: any }>()
);

export const cleanPayload = createAction(
  '[Group] clean payload',
);

export const getMembers = createAction(
  '[Group] get group members',
  props<{ group_id: string }>()
);

export const getMembersSuccess = createAction(
  '[Group] get group members success',
  props<{ members: MemberDTO[] }>()
);

export const pushAuthMember = createAction(
  '[Group] set auth member',
  props<{ authMember: MemberDTO }>()
);

export const createGroup = createAction(
  '[Group] create group',
  props<{ group: GroupDTO }>()
);

export const createGroupSuccess = createAction(
  '[Group] create group success',
  props<{ group: GroupDTO }>()
);

export const updateGroup = createAction(
  '[Group] update group',
  props<{ group: GroupDTO }>()
);

export const updateGroupSuccess = createAction(
  '[Group] update group success',
  props<{ group: GroupDTO }>()
);

export const deleteGroup = createAction(
  '[Group] delete group',
  props<{ group_id: string }>()
);

export const deleteGroupSuccess = createAction(
  '[Group] delete group success'
);

export const pushSelectedTab = createAction(
  '[Group] set selected tab',
  props<{ selectedTab: number }>()
);

export const stadisticsGroup = createAction(
  '[Group] stadistics group',
  props<{ group_id: string }>()
);

export const stadisticsGroupSuccess = createAction(
  '[Group] stadistics group success',
  props<{ stadistics: StadisticsDTO }>()
);