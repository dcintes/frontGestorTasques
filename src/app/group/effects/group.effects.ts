import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GroupService } from "../services/group.service";
import * as groupAction from "../actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { MemberService } from "src/app/member/services/member.service";


@Injectable()
export class GroupEffects {

  constructor(
		private actions$: Actions,
		private groupService: GroupService,
    private memberService: MemberService,
	) {}

  getGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupAction.getGroup),
      exhaustMap(( { group_id } ) =>
      this.groupService.getGroup(group_id).pipe(
        map((group) => {
          console.debug(group);
          return groupAction.getGroupSuccess({ 
            group: group
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(groupAction.error({payload: err}))
        })
      ))
    )
  );

  getMembers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupAction.getMembers),
      exhaustMap(( { group_id } ) =>
      this.memberService.getMembers(group_id).pipe(
        map((members) => {
          console.debug(members);
          return groupAction.getMembersSuccess({ 
            members: members
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(groupAction.error({payload: err}))
        })
      ))
    )
  );

  createGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupAction.createGroup),
      exhaustMap(( { group } ) =>
      this.groupService.createGroup(group).pipe(
        map((group) => {
          console.debug(group);
          return groupAction.createGroupSuccess({ 
            group: group
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(groupAction.error({payload: err}))
        })
      ))
    )
  );

  updateGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupAction.updateGroup),
      exhaustMap(( { group } ) =>
      this.groupService.updateGroup(group).pipe(
        map((group) => {
          console.debug(group);
          return groupAction.updateGroupSuccess({ 
            group: group
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(groupAction.error({payload: err}))
        })
      ))
    )
  );

  deleteGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupAction.deleteGroup),
      exhaustMap(( { group_id } ) =>
      this.groupService.deleteGroup(group_id).pipe(
        map((group) => {
          console.debug(group);
          return groupAction.deleteGroupSuccess()
        }),
        catchError((err) => {
          console.error(err);
          return of(groupAction.error({payload: err}))
        })
      ))
    )
  );
}