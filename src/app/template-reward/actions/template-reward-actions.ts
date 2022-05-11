import { createAction, props } from "@ngrx/store";
import { RewardDTO } from "src/app/reward/models/reward.dto";
import { TemplateRewardDTO } from "../models/template-reward.dto";

export const getTemplateReward = createAction(
  '[TemplateReward] get templateReward',
  props<{ group_id: string, templateReward_id: string }>()
);

export const getTemplateRewardSuccess = createAction(
  '[TemplateReward] get templateReward success',
  props<{ templateReward: TemplateRewardDTO }>()
);

export const error = createAction(
  '[TemplateReward] error',
  props<{ payload: any }>()
);

export const cleanPayload = createAction(
  '[TemplateReward] clean payload',
);

export const createTemplateReward = createAction(
  '[TemplateReward] create templateReward',
  props<{ group_id: string, templateReward: TemplateRewardDTO }>()
);

export const createTemplateRewardSuccess = createAction(
  '[TemplateReward] create templateReward success',
  props<{ templateReward: TemplateRewardDTO }>()
);

export const updateTemplateReward = createAction(
  '[TemplateReward] update templateReward',
  props<{ group_id: string, templateReward: TemplateRewardDTO }>()
);

export const updateTemplateRewardSuccess = createAction(
  '[TemplateReward] update templateReward success',
  props<{ templateReward: TemplateRewardDTO }>()
);

export const deleteTemplateReward = createAction(
  '[TemplateReward] delete templateReward',
  props<{ group_id: string, templateReward_id: string }>()
);

export const deleteTemplateRewardSuccess = createAction(
  '[TemplateReward] delete templateReward success',
);

export const listTemplateRewards = createAction(
  '[TemplateReward] list templateRewards',
  props<{ group_id: string }>()
);

export const listTemplateRewardsSuccess = createAction(
  '[TemplateReward] list templateRewards success',
  props<{ templateRewards: TemplateRewardDTO[] }>()
);

export const claimTemplateReward = createAction(
  '[TemplateReward] claim templateReward',
  props<{ group_id: string, templateReward_id: string }>()
);

export const claimTemplateRewardSuccess = createAction(
  '[TemplateReward] claim templateReward success',
  props<{ reward: RewardDTO }>()
);