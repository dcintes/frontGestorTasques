import { createAction, props } from '@ngrx/store';
import { MemberDTO } from 'src/app/member/models/member.dto';

export const getMember = createAction(
  '[Member] get member',
  props<{ group_id: string, member_id: string }>()
);

export const getMemberSuccess = createAction(
  '[Member] get member success',
  props<{ member: MemberDTO }>()
);

export const listMembers = createAction(
  '[Member] list members',
  props<{ group_id: string }>()
);

export const listMembersSuccess = createAction(
  '[Member] list members success',
  props<{ members: MemberDTO[] }>()
);

export const error = createAction(
  '[Member] error',
  props<{ payload: any }>()
);

export const deleteMember = createAction(
  '[Member] delete member',
  props<{ group_id: string, member_id: string }>()
);

export const deleteMemberSuccess = createAction(
  '[Member] delete member success'
);
