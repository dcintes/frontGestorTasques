
import { createReducer, on } from '@ngrx/store';
import * as templateTaskActions from "../actions";
import { TemplateTaskDTO } from '../models/template-task.dto';

export interface TemplateTaskState {
  templateTask: TemplateTaskDTO,
  templateTasks: TemplateTaskDTO[],
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

// Estat inicial
export const initialState: TemplateTaskState = {
  templateTask: new TemplateTaskDTO('','','','',0),
  templateTasks: [],
	loading: false,
  loaded: false,
  error: null,
  payload: null,
};

const _templateTaskReducer = createReducer(
  initialState,
  on(templateTaskActions.getTemplateTask, (state, {group_id, templateTask_id}) => ({
		...state,
		templateTask: new TemplateTaskDTO(templateTask_id,'','','',0),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateTaskActions.getTemplateTaskSuccess, (state, {templateTask}) => ({
    ...state,
    templateTask: templateTask,
    loading: false,
    loaded: true,
  })),
  on(templateTaskActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),

  on(templateTaskActions.createTemplateTask, (state, {group_id, templateTask}) => ({
		...state,
		templateTask: templateTask,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateTaskActions.createTemplateTaskSuccess, (state, {templateTask}) => ({
    ...state,
    templateTask: templateTask,
    loading: false,
    loaded: true,
    payload: {
      action: 'createTemplateTaskSuccess',
      group_id: templateTask.group_id,
      templateTask_id: templateTask.id,
    }
  })),

  on(templateTaskActions.updateTemplateTask, (state, {group_id, templateTask}) => ({
		...state,
		templateTask: templateTask,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateTaskActions.updateTemplateTaskSuccess, (state, {templateTask}) => ({
    ...state,
    templateTask: templateTask,
    loading: false,
    loaded: true,
    payload: {
      action: 'updateTemplateTaskSuccess',
      group_id: templateTask.group_id,
      templateTask_id: templateTask.id,
    }
  })),

  on(templateTaskActions.deleteTemplateTask, (state, {group_id, templateTask_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateTaskActions.deleteTemplateTaskSuccess, (state, {}) => ({
    ...initialState,
    payload: {
      action: 'deleteTemplateTaskSuccess',
      group_id: state.templateTask.group_id,
    }
  })),

  on(templateTaskActions.listTemplateTasks, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateTaskActions.listTemplateTasksSuccess, (state, {templateTasks}) => ({
    ...state,
    templateTasks: templateTasks,
    loading: false,
    loaded: true,
  })),

  on(templateTaskActions.instanceTemplateTask, (state, {group_id, templateTask_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(templateTaskActions.instanceTemplateTaskSuccess, (state, {task}) => ({
    ...state,
    loading: false,
    loaded: true,
    payload: {
      action: 'instanceTemplateTaskSuccess',
      task: task,
    }
  })),

);

export function templateTaskReducer(state: any, action: any) {
	return _templateTaskReducer(state, action);
}