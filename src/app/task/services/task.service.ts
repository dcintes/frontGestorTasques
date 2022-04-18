import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { TaskDTO } from '../models/task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getTask(group_id: string, task_id: string): Observable<TaskDTO> {
    return this.http
      .get<TaskDTO>(this.baseUrl+'group/'+group_id+'/task/'+task_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  createTask(group_id: string, task: TaskDTO): Observable<TaskDTO> {
    return this.http
      .post<TaskDTO>(this.baseUrl+'group/'+group_id+'/task/', task)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  updateTask(group_id: string, task: TaskDTO): Observable<TaskDTO> {
    return this.http
      .put<TaskDTO>(this.baseUrl+'group/'+group_id+'/task/'+task.id, task)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  deleteTask(group_id: string, task_id: string): Observable<any> {
    return this.http
      .delete(this.baseUrl+'group/'+group_id+'/task/'+task_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  listTasks(group_id: string): Observable<TaskDTO[]> {
    return this.http
      .get<TaskDTO[]>(this.baseUrl+'group/'+group_id+'/tasks')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  assignTask(group_id: string, task_id: string, member_id: string): Observable<TaskDTO> {
    return this.http
      .post<TaskDTO>(this.baseUrl+'group/'+group_id+'/task/'+task_id+'/assign', { member_id: member_id })
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  completeTask(group_id: string, task_id: string): Observable<TaskDTO> {
    return this.http
      .post<TaskDTO>(this.baseUrl+'group/'+group_id+'/task/'+task_id+'/complete', null)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }
}
