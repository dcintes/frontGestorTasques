import { createAction, props } from "@ngrx/store";
import { RewardDTO } from "../models/reward.dto";

export const getReward = createAction(
  '[Reward] get reward',
  props<{ group_id: string, reward_id: string }>()
);

export const getRewardSuccess = createAction(
  '[Reward] get reward success',
  props<{ reward: RewardDTO }>()
);

export const error = createAction(
  '[Reward] error',
  props<{ payload: any }>()
);