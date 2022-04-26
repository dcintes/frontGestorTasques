import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { InvitationDTO } from '../models/invitation.dto';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  createInvitation(invitation: InvitationDTO): Observable<InvitationDTO> {
    return this.http
      .post<InvitationDTO>(this.baseUrl+'invitation', invitation)
      .pipe(
        map(() => invitation),
        catchError(err => {
          return this.errorService.handleHttpError(err)
      }));
  }

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
