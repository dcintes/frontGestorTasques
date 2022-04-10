import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AuthDTO } from '../models/auth.dto';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from 'src/app/shared/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost/api/';

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  login(auth: AuthDTO): Observable<AuthDTO> {
    return this.http
      .post<AuthDTO>(this.baseUrl+'login', auth)
      .pipe(catchError(err => {
        console.log('Error: ', err);
        return this.errorService.handleError(err.message)
      }));
  }
}
