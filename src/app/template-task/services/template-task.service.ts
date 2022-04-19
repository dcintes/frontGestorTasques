import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { TaskDTO } from 'src/app/task/models/task.dto';
import { environment } from 'src/environments/environment';
import { TemplateTaskDTO } from '../models/template-task.dto';

@Injectable({
  providedIn: 'root'
})
export class TemplateTaskService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getTemplateTask(group_id: string, templateTask_id: string): Observable<TemplateTaskDTO> {
    return this.http
      .get<TemplateTaskDTO>(this.baseUrl+'group/'+group_id+'/template/task/'+templateTask_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  createTemplateTask(group_id: string, templateTask: TemplateTaskDTO): Observable<TemplateTaskDTO> {
    return this.http
      .post<TemplateTaskDTO>(this.baseUrl+'group/'+group_id+'/template/task/', templateTask)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  updateTemplateTask(group_id: string, templateTask: TemplateTaskDTO): Observable<TemplateTaskDTO> {
    return this.http
      .put<TemplateTaskDTO>(this.baseUrl+'group/'+group_id+'/template/task/'+templateTask.id, templateTask)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  deleteTemplateTask(group_id: string, templateTask_id: string): Observable<any> {
    return this.http
      .delete(this.baseUrl+'group/'+group_id+'/template/task/'+templateTask_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  listTemplateTasks(group_id: string): Observable<TemplateTaskDTO[]> {
    return this.http
      .get<TemplateTaskDTO[]>(this.baseUrl+'group/'+group_id+'/template/tasks')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  instanceTemplateTask(group_id: string, templateTask_id: string): Observable<TaskDTO> {
    return this.http
      .post<TaskDTO>(this.baseUrl+'group/'+group_id+'/template/task/'+templateTask_id+'/instance', null)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

}