import { createAction, props } from "@ngrx/store";
import { TaskDTO } from "src/app/task/models/task.dto";
import { TemplateTaskDTO } from "../models/template-task.dto";

export const getTemplateTask = createAction(
  '[TemplateTask] get templateTask',
  props<{ group_id: string, templateTask_id: string }>()
);

export const getTemplateTaskSuccess = createAction(
  '[TemplateTask] get templateTask success',
  props<{ templateTask: TemplateTaskDTO }>()
);

export const error = createAction(
  '[TemplateTask] error',
  props<{ payload: any }>()
);

export const cleanPayload = createAction(
  '[TemplateTask] clean payload',
);


export const createTemplateTask = createAction(
  '[TemplateTask] create templateTask',
  props<{ group_id: string, templateTask: TemplateTaskDTO }>()
);

export const createTemplateTaskSuccess = createAction(
  '[TemplateTask] create templateTask success',
  props<{ templateTask: TemplateTaskDTO }>()
);

export const updateTemplateTask = createAction(
  '[TemplateTask] update templateTask',
  props<{ group_id: string, templateTask: TemplateTaskDTO }>()
);

export const updateTemplateTaskSuccess = createAction(
  '[TemplateTask] update templateTask success',
  props<{ templateTask: TemplateTaskDTO }>()
);

export const deleteTemplateTask = createAction(
  '[TemplateTask] delete templateTask',
  props<{ group_id: string, templateTask_id: string }>()
);

export const deleteTemplateTaskSuccess = createAction(
  '[TemplateTask] delete templateTask success',
);

export const listTemplateTasks = createAction(
  '[TemplateTask] list templateTasks',
  props<{ group_id: string }>()
);

export const listTemplateTasksSuccess = createAction(
  '[TemplateTask] list templateTasks success',
  props<{ templateTasks: TemplateTaskDTO[] }>()
);

export const instanceTemplateTask = createAction(
  '[TemplateTask] instance templateTask',
  props<{ group_id: string, templateTask_id: string }>()
);

export const instanceTemplateTaskSuccess = createAction(
  '[TemplateTask] instance templateTask success',
  props<{ task: TaskDTO }>()
);