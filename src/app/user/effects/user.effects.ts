import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {  map, catchError, exhaustMap } from 'rxjs/operators'
import * as userAction from '../actions';
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { UserService } from "../services/user.service";
import { UserDTO } from "../models/user.dto";
import { ErrorService } from "src/app/shared/services/error.service";
import { InvitationService } from "../services/invitation.service";


@Injectable()
export class UserEffects {

  constructor(
		private actions$: Actions,
		private userService: UserService,
    private invitationService: InvitationService,
	) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.getUser),
      exhaustMap(( { id } ) =>
      this.userService.getUser(id).pipe(
        map((user) => {
          console.debug(user);
          return userAction.getUserSuccess({ 
            user: user
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(userAction.error({payload: err}))
        })
      ))
    )
  );

  getUserGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.getGroups),
      exhaustMap(( { user_id } ) =>
      this.userService.getUserGroups(user_id).pipe(
        map((groups) => {
          console.debug(groups);
          return userAction.getGroupsSuccess({ 
            groups: groups
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(userAction.error({payload: err}))
        })
      ))
    )
  );

  getUserInvitations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.getInvitations),
      exhaustMap(( { user_id } ) =>
      this.userService.getUserInvitations(user_id).pipe(
        map((invitations) => {
          console.debug(invitations);
          return userAction.getInvitationsSuccess({ 
            invitations: invitations
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(userAction.error({payload: err}))
        })
      ))
    )
  );

  acceptInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.acceptInvitation),
      exhaustMap(( { invitation_id } ) =>
      this.invitationService.acceptInvitation(invitation_id).pipe(
        map((invitation_id) => {
          console.debug(invitation_id);
          return userAction.acceptInvitationSuccess({ 
            invitation_id: invitation_id
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(userAction.error({payload: err}))
        })
      ))
    )
  );

  deleteInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.deleteInvitation),
      exhaustMap(( { invitation_id } ) =>
      this.invitationService.deleteInvitation(invitation_id).pipe(
        map((invitation_id) => {
          console.debug(invitation_id);
          return userAction.deleteInvitationSuccess({ 
            invitation_id: invitation_id
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(userAction.error({payload: err}))
        })
      ))
    )
  );
}
