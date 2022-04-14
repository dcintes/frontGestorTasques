import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {  map, catchError, exhaustMap } from 'rxjs/operators'
import * as userAction from '../actions';
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { UserService } from "../services/user.service";
import { UserDTO } from "../models/user.dto";
import { ErrorService } from "src/app/shared/services/error.service";


@Injectable()
export class UserEffects {

  constructor(
		private actions$: Actions,
		private userService: UserService
	) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.getUser),
      exhaustMap(( { id } ) =>
      this.userService.getUser(id).pipe(
        map((user) => {
          console.log(user);
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
          console.log(groups);
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
}