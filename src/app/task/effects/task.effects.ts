import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../services/task.service";
import * as taskAction from "../actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class TaskEffects {

  constructor(
		private actions$: Actions,
		private taskService: TaskService,
	) {}

  getTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.getTask),
      exhaustMap(( { group_id, task_id } ) =>
      this.taskService.getTask(group_id, task_id).pipe(
        map((task) => {
          console.debug(task);
          return taskAction.getTaskSuccess({ 
            task: task
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.createTask),
      exhaustMap(( { group_id, task } ) =>
      this.taskService.createTask(group_id, task).pipe(
        map((task) => {
          console.debug(task);
          return taskAction.createTaskSuccess({ 
            task: task
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.updateTask),
      exhaustMap(( { group_id, task } ) =>
      this.taskService.updateTask(group_id, task).pipe(
        map((task) => {
          console.debug(task);
          return taskAction.updateTaskSuccess({ 
            task: task
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.deleteTask),
      exhaustMap(( { group_id, task_id } ) =>
      this.taskService.deleteTask(group_id, task_id).pipe(
        map(() => {
          console.debug('deleted task');
          return taskAction.deleteTaskSuccess()
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

  listTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.listTasks),
      exhaustMap(( { group_id } ) =>
      this.taskService.listTasks(group_id).pipe(
        map((tasks) => {
          console.debug(tasks);
          return taskAction.listTasksSuccess({ 
            tasks: tasks
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

  assignTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.assignTask),
      exhaustMap(( { group_id, task_id, member_id } ) =>
      this.taskService.assignTask(group_id, task_id, member_id).pipe(
        map((task) => {
          console.debug(task);
          return taskAction.assignTaskSuccess({ 
            task: task
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

  completeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskAction.completeTask),
      exhaustMap(( { group_id, task_id } ) =>
      this.taskService.completeTask(group_id, task_id).pipe(
        map((task) => {
          console.debug(task);
          return taskAction.completeTaskSuccess({ 
            task: task
          })
        }),
        catchError((err) => {
          console.error(err);
          return of(taskAction.error({payload: err}))
        })
      ))
    )
  );

}