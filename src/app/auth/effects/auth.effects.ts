import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {  map, catchError, exhaustMap } from 'rxjs/operators'
import { AuthService } from "../services/auth.service";
import * as authAction from '../actions';
import { AuthDTO } from "../models/auth.dto";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";


@Injectable()
export class AuthEffects {

  constructor(
		private actions$: Actions,
		private authService: AuthService,
    private localStorageService: LocalStorageService,
	) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.login),
      exhaustMap(( { auth } ) =>
      this.authService.login(auth).pipe(
        map((token) => {
          console.log(token);
          this.localStorageService.set('access_token', token.token);
          this.localStorageService.set('user_id', token.user_id);
          return authAction.loginSuccess({ 
            auth: new AuthDTO('', '', token.user_id, token.token)
          })
        }),
        catchError((err) => {
          console.log(err);
          return of(authAction.error({payload: err}))
        })
      ))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.logout),
      map(() => {
        this.localStorageService.remove('access_token');
        this.localStorageService.remove('user_id');
      })
    ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
  this.actions$.pipe(
    ofType(authAction.register),
    exhaustMap(( { register } ) =>
    this.authService.register(register).pipe(
      map((auth) => {
        console.log(auth);
        this.localStorageService.set('access_token', auth.token);
        this.localStorageService.set('user_id', auth.user_id);
        return authAction.registerSuccess({ 
          auth: new AuthDTO('', '', auth.user_id, auth.token)
        })
      }),
      catchError((err) => {
        console.log(err);
        return of(authAction.error({payload: err}))
      })
    ))
  )
);

}