import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDTO } from '../models/auth.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(
    private http: HttpClient
  ) { }

  login(auth: AuthDTO): Observable<AuthDTO> {
    return this.http
      .post<AuthDTO>(this.baseUrl+'auth', auth);
      //.pipe(catchError(this.sharedService.handleError));
  }
}
