import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private subject;

  constructor() {
    this.subject = new Subject<string>();
  }

  public handleError(error: string) {
    console.log('Error: ', error);
    this.subject.next(error);
    return throwError(() => new Error(error));
  }

  public errors(): Subject<string> {
    return this.subject;
  }
}
