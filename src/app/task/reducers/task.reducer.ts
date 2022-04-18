import { TaskDTO } from "../models/task.dto";
import { createReducer, on } from '@ngrx/store';
import * as taskActions from "../actions";

export interface TaskState {
  task: TaskDTO,
  tasks: TaskDTO[],
	loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

// Estat inicial
export const initialState: TaskState = {
  task: new TaskDTO('','','','',0),
  tasks: [],
	loading: false,
  loaded: false,
  error: null,
  payload: null,
};

const _taskReducer = createReducer(
  initialState,
  on(taskActions.getTask, (state, {group_id, task_id}) => ({
		...state,
		task: new TaskDTO(task_id,'','','',0),
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.getTaskSuccess, (state, {task}) => ({
    ...state,
    task: task,
    loading: false,
    loaded: true,
  })),
  on(taskActions.error, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),

  on(taskActions.createTask, (state, {group_id, task}) => ({
		...state,
		task: task,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.createTaskSuccess, (state, {task}) => ({
    ...state,
    task: task,
    loading: false,
    loaded: true,
    payload: {
      action: 'createTaskSuccess',
      group_id: task.group_id,
      task_id: task.id,
    }
  })),

  on(taskActions.updateTask, (state, {group_id, task}) => ({
		...state,
		task: task,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.updateTaskSuccess, (state, {task}) => ({
    ...state,
    task: task,
    loading: false,
    loaded: true,
    payload: {
      action: 'updateTaskSuccess',
      group_id: task.group_id,
      task_id: task.id,
    }
  })),

  on(taskActions.deleteTask, (state, {group_id, task_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.deleteTaskSuccess, (state, {}) => ({
    ...initialState,
    payload: {
      action: 'deleteTaskSuccess',
      group_id: state.task.group_id,
    }
  })),

  on(taskActions.listTasks, (state, {group_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.listTasksSuccess, (state, {tasks}) => ({
    ...state,
    tasks: tasks,
    loading: false,
    loaded: true,
  })),

  on(taskActions.assignTask, (state, {group_id, task_id, member_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.assignTaskSuccess, (state, {task}) => ({
    ...state,
    task: task,
    loading: false,
    loaded: true,
  })),

  on(taskActions.completeTask, (state, {group_id, task_id}) => ({
		...state,
    loading: true,
    loaded: false,
    error: null,
    payload: null,
	})),
  on(taskActions.completeTaskSuccess, (state, {task}) => ({
    ...state,
    task: task,
    loading: false,
    loaded: true,
  })),

);

export function taskReducer(state: any, action: any) {
	return _taskReducer(state, action);
}