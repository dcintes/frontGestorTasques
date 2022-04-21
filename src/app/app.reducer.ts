import { ActionReducerMap } from "@ngrx/store";
import * as authReducer from './auth/reducers';
import * as groupReducer from './group/reducers';
import * as memberReducer from './member/reducers';
import * as taskReducer from './task/reducers';
import * as templateRewardReducer from './template-reward/reducers';
import * as templateTaskReducer from './template-task/reducers';
import * as userReducer from './user/reducers';


export interface AppState {
	auth: authReducer.AuthState,
	user: userReducer.UserState,
	group: groupReducer.GroupState,
	member: memberReducer.MemberState,
	task: taskReducer.TaskState,
	templateTask: templateTaskReducer.TemplateTaskState,
	templateReward: templateRewardReducer.TemplateRewardState
}

export const appReducers: ActionReducerMap<AppState> = {
	auth: authReducer.authReducer,
	user: userReducer.userReducer,
	group: groupReducer.groupReducer,
	member: memberReducer.memberReducer,
	task: taskReducer.taskReducer,
	templateTask: templateTaskReducer.templateTaskReducer,
	templateReward: templateRewardReducer.templateRewardReducer,
};