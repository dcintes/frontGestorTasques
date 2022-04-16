import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';
import { MemberDTO } from '../models/member.dto';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getMembers(group_id: string): Observable<MemberDTO[]> {
    return this.http
      .get<MemberDTO[]>(this.baseUrl+'group/'+group_id+'/members')
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }
}
