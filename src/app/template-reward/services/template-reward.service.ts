import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { RewardDTO } from 'src/app/reward/models/reward.dto';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { TemplateRewardDTO } from '../models/template-reward.dto';

@Injectable({
  providedIn: 'root'
})
export class TemplateRewardService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getTemplateReward(group_id: string, templateReward_id: string): Observable<TemplateRewardDTO> {
    return this.http
      .get<TemplateRewardDTO>(this.baseUrl+'group/'+group_id+'/template/reward/'+templateReward_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  createTemplateReward(group_id: string, templateReward: TemplateRewardDTO): Observable<TemplateRewardDTO> {
    return this.http
      .post<TemplateRewardDTO>(this.baseUrl+'group/'+group_id+'/template/reward/', templateReward)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  updateTemplateReward(group_id: string, templateReward: TemplateRewardDTO): Observable<TemplateRewardDTO> {
    return this.http
      .put<TemplateRewardDTO>(this.baseUrl+'group/'+group_id+'/template/reward/'+templateReward.id, templateReward)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  deleteTemplateReward(group_id: string, templateReward_id: string): Observable<any> {
    return this.http
      .delete(this.baseUrl+'group/'+group_id+'/template/reward/'+templateReward_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  listTemplateRewards(group_id: string): Observable<TemplateRewardDTO[]> {
    return this.http
      .get<TemplateRewardDTO[]>(this.baseUrl+'group/'+group_id+'/template/rewards')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  claimTemplateReward(group_id: string, templateReward_id: string): Observable<RewardDTO> {
    return this.http
      .post<RewardDTO>(this.baseUrl+'group/'+group_id+'/template/reward/'+templateReward_id+'/claim', null)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

}
