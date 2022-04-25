import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { RewardDTO } from '../models/reward.dto';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getReward(group_id: string, reward_id: string): Observable<RewardDTO> {
    return this.http
      .get<RewardDTO>(this.baseUrl+'group/'+group_id+'/reward/'+reward_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  listRewards(group_id: string): Observable<RewardDTO[]> {
    return this.http
      .get<RewardDTO[]>(this.baseUrl+'group/'+group_id+'/rewards')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }
}
