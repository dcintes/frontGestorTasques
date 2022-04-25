import { createReducer, on } from '@ngrx/store';
import * as rewardActions from "../actions";
import { RewardDTO } from "../models/reward.dto";

export interface RewardState {
  reward: RewardDTO,
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

// Estat inicial
export const initialState: RewardState = {
  reward: new RewardDTO('','','','',0,'',''),
	loading: false,
  loaded: false,
  error: null,
  payload: null,
};

const _rewardReducer = createReducer(
  initialState,
  on(rewardActions.getReward, (state, {group_id, reward_id}) => ({
		...state,
		reward: new RewardDTO(reward_id,'','','',0,'',''),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(rewardActions.getRewardSuccess, (state, {reward}) => ({
    ...state,
    reward: reward,
    loading: false,
    loaded: true,
  })),
  on(rewardActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),

);

export function rewardReducer(state: any, action: any) {
	return _rewardReducer(state, action);
}