import { createAction, props } from "@ngrx/store";
import { TaskDTO } from "../models/task.dto";

export const getTask = createAction(
  '[Task] get task',
  props<{ group_id: string, task_id: string }>()
);

export const getTaskSuccess = createAction(
  '[Task] get task success',
  props<{ task: TaskDTO }>()
);

export const error = createAction(
  '[Task] error',
  props<{ payload: any }>()
);

export const cleanPayload = createAction(
  '[Task] clean payload',
);

export const createTask = createAction(
  '[Task] create task',
  props<{ group_id: string, task: TaskDTO }>()
);

export const createTaskSuccess = createAction(
  '[Task] create task success',
  props<{ task: TaskDTO }>()
);

export const updateTask = createAction(
  '[Task] update task',
  props<{ group_id: string, task: TaskDTO }>()
);

export const updateTaskSuccess = createAction(
  '[Task] update task success',
  props<{ task: TaskDTO }>()
);

export const deleteTask = createAction(
  '[Task] delete task',
  props<{ group_id: string, task_id: string }>()
);

export const deleteTaskSuccess = createAction(
  '[Task] delete task success',
);

export const listTasks = createAction(
  '[Task] list tasks',
  props<{ group_id: string }>()
);

export const listTasksSuccess = createAction(
  '[Task] list tasks success',
  props<{ tasks: TaskDTO[] }>()
);

export const assignTask = createAction(
  '[Task] assign task',
  props<{ group_id: string, task_id: string, member_id: string }>()
);

export const assignTaskSuccess = createAction(
  '[Task] assign task success',
  props<{ task: TaskDTO }>()
);

export const completeTask = createAction(
  '[Task] complete task',
  props<{ group_id: string, task_id: string }>()
);

export const completeTaskSuccess = createAction(
  '[Task] complete task success',
  props<{ task: TaskDTO }>()
);