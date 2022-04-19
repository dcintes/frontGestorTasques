import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as templateTaskAction from "../actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { TemplateTaskService } from "../services/template-task.service";

@Injectable()
export class TemplateTaskEffects {

  constructor(
		private actions$: Actions,
		private templateTaskService: TemplateTaskService,
	) {}

  getTemplateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateTaskAction.getTemplateTask),
      exhaustMap(( { group_id, templateTask_id } ) =>
      this.templateTaskService.getTemplateTask(group_id, templateTask_id).pipe(
        map((templateTask) => {
          console.debug(templateTask);
          return templateTaskAction.getTemplateTaskSuccess({ 
            templateTask: templateTask
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateTaskAction.error({payload: err}))
        })
      ))
    )
  );

  createTemplateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateTaskAction.createTemplateTask),
      exhaustMap(( { group_id, templateTask } ) =>
      this.templateTaskService.createTemplateTask(group_id, templateTask).pipe(
        map((templateTask) => {
          console.debug(templateTask);
          return templateTaskAction.createTemplateTaskSuccess({ 
            templateTask: templateTask
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateTaskAction.error({payload: err}))
        })
      ))
    )
  );

  updateTemplateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateTaskAction.updateTemplateTask),
      exhaustMap(( { group_id, templateTask } ) =>
      this.templateTaskService.updateTemplateTask(group_id, templateTask).pipe(
        map((templateTask) => {
          console.debug(templateTask);
          return templateTaskAction.updateTemplateTaskSuccess({ 
            templateTask: templateTask
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateTaskAction.error({payload: err}))
        })
      ))
    )
  );

  deleteTemplateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateTaskAction.deleteTemplateTask),
      exhaustMap(( { group_id, templateTask_id } ) =>
      this.templateTaskService.deleteTemplateTask(group_id, templateTask_id).pipe(
        map(() => {
          console.debug('deleted templateTask');
          return templateTaskAction.deleteTemplateTaskSuccess()
        }),
        catchError((err) => {
          console.error(err);
          return of(templateTaskAction.error({payload: err}))
        })
      ))
    )
  );

  listTemplateTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateTaskAction.listTemplateTasks),
      exhaustMap(( { group_id } ) =>
      this.templateTaskService.listTemplateTasks(group_id).pipe(
        map((templateTasks) => {
          console.debug(templateTasks);
          return templateTaskAction.listTemplateTasksSuccess({ 
            templateTasks: templateTasks
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateTaskAction.error({payload: err}))
        })
      ))
    )
  );

  instanceTemplateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateTaskAction.instanceTemplateTask),
      exhaustMap(( { group_id, templateTask_id } ) =>
      this.templateTaskService.instanceTemplateTask(group_id, templateTask_id).pipe(
        map((task) => {
          console.debug(task);
          return templateTaskAction.instanceTemplateTaskSuccess({ 
            task: task
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(templateTaskAction.error({payload: err}))
        })
      ))
    )
  );

}