import { ActionReducerMap } from "@ngrx/store";
import * as authReducer from './auth/reducers';
import * as userReducer from './user/reducers';
import * as groupReducer from './group/reducers';
import * as taskReducer from './task/reducers';
import * as templateTaskReducer from './template-task/reducers';

export interface AppState {
	auth: authReducer.AuthState,
	user: userReducer.UserState,
	group: groupReducer.GroupState,
	task: taskReducer.TaskState,
	templateTask: templateTaskReducer.TemplateTaskState
}

export const appReducers: ActionReducerMap<AppState> = {
	auth: authReducer.authReducer,
	user: userReducer.userReducer,
	group: groupReducer.groupReducer,
	task: taskReducer.taskReducer,
	templateTask: templateTaskReducer.templateTaskReducer
};