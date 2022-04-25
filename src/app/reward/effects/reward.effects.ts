import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as rewardAction from "../actions";
import { RewardService } from "../services/reward.service";

@Injectable()
export class RewardEffects {

  constructor(
		private actions$: Actions,
		private rewardService: RewardService,
	) {}

  getReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rewardAction.getReward),
      exhaustMap(( { group_id, reward_id } ) =>
      this.rewardService.getReward(group_id, reward_id).pipe(
        map((reward) => {
          console.debug(reward);
          return rewardAction.getRewardSuccess({ 
            reward: reward
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(rewardAction.error({payload: err}))
        })
      ))
    )
  );

}