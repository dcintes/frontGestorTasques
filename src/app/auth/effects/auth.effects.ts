import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {  map, catchError, exhaustMap } from 'rxjs/operators'
import { AuthService } from "../Services/auth.service";
import * as authAction from '../actions';
import { AuthDTO } from "../models/auth.dto";


@Injectable()
export class AuthEffects {

  constructor(
		private actions$: Actions,
		private authService: AuthService
	) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.login),
      exhaustMap(( { auth } ) =>
      this.authService.login(auth).pipe(
        map((token) => {
          console.log(token);
          return authAction.loginSuccess({ 
            auth: new AuthDTO(token.user_id, token.token, auth.email, auth.password)
          })
        }),
        catchError((err) => {
          console.log(err);
          return of(authAction.loginError({payload: err}))
        })
      ))
    )
  )

}