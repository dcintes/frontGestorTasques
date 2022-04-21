import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as memberAction from "../actions";
import { MemberService } from "../services/member.service";

@Injectable()
export class MemberEffects {

  constructor(
		private actions$: Actions,
		private memberService: MemberService,
	) {}

  getMember$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberAction.getMember),
      exhaustMap(( { group_id, member_id } ) =>
      this.memberService.getMember(group_id, member_id).pipe(
        map((member) => {
          console.debug(member);
          return memberAction.getMemberSuccess({ 
            member: member
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(memberAction.error({payload: err}))
        })
      ))
    )
  );

  deleteMember$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberAction.deleteMember),
      exhaustMap(( { group_id, member_id } ) =>
      this.memberService.deleteMember(group_id, member_id).pipe(
        map(() => {
          console.debug('deleted member');
          return memberAction.deleteMemberSuccess()
        }),
        catchError((err) => {
          console.error(err);
          return of(memberAction.error({payload: err}))
        })
      ))
    )
  );

  listMembers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberAction.listMembers),
      exhaustMap(( { group_id } ) =>
      this.memberService.listMembers(group_id).pipe(
        map((members) => {
          console.debug(members);
          return memberAction.listMembersSuccess({ 
            members: members
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(memberAction.error({payload: err}))
        })
      ))
    )
  );

  
}