import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { GroupDTO } from 'src/app/group/models/group.dto';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost/api/';

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getUser(id: string): Observable<UserDTO> {
    return this.http
      .get<UserDTO>(this.baseUrl+'user/'+id)
      .pipe(catchError(err => {
        console.log('Error: ', err);
        return this.errorService.handleError(err.message)
      }));
  }

  getUserGroups(id: string): Observable<GroupDTO[]> {
    return this.http
      .get<GroupDTO[]>(this.baseUrl+'user/'+id+'/groups')
      .pipe(catchError(err => {
        console.log('Error: ', err);
        return this.errorService.handleError(err.message)
      }));
  }
}
