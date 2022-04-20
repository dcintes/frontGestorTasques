
import { createReducer, on } from '@ngrx/store';
import * as templateRewardActions from "../actions";
import { TemplateRewardDTO } from '../models/template-reward.dto';

export interface TemplateRewardState {
  templateReward: TemplateRewardDTO,
  templateRewards: TemplateRewardDTO[],
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

// Estat inicial
export const initialState: TemplateRewardState = {
  templateReward: new TemplateRewardDTO('','','','',0,'',''),
  templateRewards: [],
	loading: false,
  loaded: false,
  error: null,
  payload: null,
};

const _templateRewardReducer = createReducer(
  initialState,
  on(templateRewardActions.getTemplateReward, (state, {group_id, templateReward_id}) => ({
		...state,
		templateReward: new TemplateRewardDTO(templateReward_id,'','','',0,'',''),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateRewardActions.getTemplateRewardSuccess, (state, {templateReward}) => ({
    ...state,
    templateReward: templateReward,
    loading: false,
    loaded: true,
  })),
  on(templateRewardActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),

  on(templateRewardActions.createTemplateReward, (state, {group_id, templateReward}) => ({
		...state,
		templateReward: templateReward,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateRewardActions.createTemplateRewardSuccess, (state, {templateReward}) => ({
    ...state,
    templateReward: templateReward,
    loading: false,
    loaded: true,
    payload: {
      action: 'createTemplateRewardSuccess',
      group_id: templateReward.group_id,
      templateReward_id: templateReward.id,
    }
  })),

  on(templateRewardActions.updateTemplateReward, (state, {group_id, templateReward}) => ({
		...state,
		templateReward: templateReward,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateRewardActions.updateTemplateRewardSuccess, (state, {templateReward}) => ({
    ...state,
    templateReward: templateReward,
    loading: false,
    loaded: true,
    payload: {
      action: 'updateTemplateRewardSuccess',
      group_id: templateReward.group_id,
      templateReward_id: templateReward.id,
    }
  })),

  on(templateRewardActions.deleteTemplateReward, (state, {group_id, templateReward_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateRewardActions.deleteTemplateRewardSuccess, (state, {}) => ({
    ...initialState,
    payload: {
      action: 'deleteTemplateRewardSuccess',
      group_id: state.templateReward.group_id,
    }
  })),

  on(templateRewardActions.listTemplateRewards, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateRewardActions.listTemplateRewardsSuccess, (state, {templateRewards}) => ({
    ...state,
    templateRewards: templateRewards,
    loading: false,
    loaded: true,
  })),

  on(templateRewardActions.claimTemplateReward, (state, {group_id, templateReward_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateRewardActions.claimTemplateRewardSuccess, (state, {reward}) => ({
    ...state,
    loading: false,
    loaded: true,
    payload: {
      action: 'claimTemplateRewardSuccess',
      reward: reward,
    }
  })),

);

export function templateRewardReducer(state: any, action: any) {
	return _templateRewardReducer(state, action);
}