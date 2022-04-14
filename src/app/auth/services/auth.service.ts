import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AuthDTO } from '../models/auth.dto';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from 'src/app/shared/services/error.service';
import { RegisterDTO } from '../models/register.dto';

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
        return this.errorService.handleHttpError(err)
      }));
  }

  register(register: RegisterDTO): Observable<AuthDTO> {
    return this.http
      .post<AuthDTO>(this.baseUrl+'register', register)
      .pipe(catchError(err => {
        return this.errorService.handleHttpError(err)
      }));
  }
}
