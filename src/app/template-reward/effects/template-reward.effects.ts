import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as templateRewardAction from "../actions";
import { TemplateRewardService } from "../services/template-reward.service";

@Injectable()
export class TemplateRewardEffects {

  constructor(
		private actions$: Actions,
		private templateRewardService: TemplateRewardService,
	) {}

  getTemplateReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateRewardAction.getTemplateReward),
      exhaustMap(( { group_id, templateReward_id } ) =>
      this.templateRewardService.getTemplateReward(group_id, templateReward_id).pipe(
        map((templateReward) => {
          console.debug(templateReward);
          return templateRewardAction.getTemplateRewardSuccess({ 
            templateReward: templateReward
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateRewardAction.error({payload: err}))
        })
      ))
    )
  );

  createTemplateReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateRewardAction.createTemplateReward),
      exhaustMap(( { group_id, templateReward } ) =>
      this.templateRewardService.createTemplateReward(group_id, templateReward).pipe(
        map((templateReward) => {
          console.debug(templateReward);
          return templateRewardAction.createTemplateRewardSuccess({ 
            templateReward: templateReward
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateRewardAction.error({payload: err}))
        })
      ))
    )
  );

  updateTemplateReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateRewardAction.updateTemplateReward),
      exhaustMap(( { group_id, templateReward } ) =>
      this.templateRewardService.updateTemplateReward(group_id, templateReward).pipe(
        map((templateReward) => {
          console.debug(templateReward);
          return templateRewardAction.updateTemplateRewardSuccess({ 
            templateReward: templateReward
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateRewardAction.error({payload: err}))
        })
      ))
    )
  );

  deleteTemplateReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateRewardAction.deleteTemplateReward),
      exhaustMap(( { group_id, templateReward_id } ) =>
      this.templateRewardService.deleteTemplateReward(group_id, templateReward_id).pipe(
        map(() => {
          console.debug('deleted templateReward');
          return templateRewardAction.deleteTemplateRewardSuccess()
        }),
        catchError((err) => {
          console.error(err);
          return of(templateRewardAction.error({payload: err}))
        })
      ))
    )
  );

  listTemplateRewards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateRewardAction.listTemplateRewards),
      exhaustMap(( { group_id } ) =>
      this.templateRewardService.listTemplateRewards(group_id).pipe(
        map((templateRewards) => {
          console.debug(templateRewards);
          return templateRewardAction.listTemplateRewardsSuccess({ 
            templateRewards: templateRewards
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateRewardAction.error({payload: err}))
        })
      ))
    )
  );

  claimTemplateReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateRewardAction.claimTemplateReward),
      exhaustMap(( { group_id, templateReward_id } ) =>
      this.templateRewardService.claimTemplateReward(group_id, templateReward_id).pipe(
        map((reward) => {
          console.debug(reward);
          return templateRewardAction.claimTemplateRewardSuccess({ 
            reward: reward
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateRewardAction.error({payload: err}))
        })
      ))
    )
  );

}