import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { GroupDTO } from 'src/app/group/models/group.dto';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { InvitationDTO } from '../models/invitation.dto';
import { UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getUser(id: string): Observable<UserDTO> {
    return this.http
      .get<UserDTO>(this.baseUrl+'user/'+id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  getUserGroups(id: string): Observable<GroupDTO[]> {
    return this.http
      .get<GroupDTO[]>(this.baseUrl+'user/'+id+'/groups')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }

  getUserInvitations(id: string): Observable<InvitationDTO[]> {
    return this.http
      .get<InvitationDTO[]>(this.baseUrl+'user/'+id+'/invitations')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }
}
