import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  deleteInvitation(invitation_id: string): Observable<string> {
    return this.http
      .delete(this.baseUrl+'invitation/'+invitation_id)
      .pipe(
        map(() => invitation_id),
        catchError(err => {
          return this.errorService.handleHttpError(err)
      }));
  }

  acceptInvitation(invitation_id: string): Observable<string> {
    return this.http
      .post(this.baseUrl+'invitation/'+invitation_id+'/accept', null)
      .pipe(
        map(() => invitation_id),
        catchError(err => {
          return this.errorService.handleHttpError(err)
      }));
  }
}
