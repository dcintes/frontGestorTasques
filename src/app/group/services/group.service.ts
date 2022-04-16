import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { GroupDTO } from '../models/group.dto';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getGroup(group_id: string): Observable<GroupDTO> {
    return this.http
      .get<GroupDTO>(this.baseUrl+'group/'+group_id)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }
}
