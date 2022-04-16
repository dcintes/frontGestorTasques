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

  public handleHttpError(error: HttpErrorResponse) {
    console.error('Error: ', error);
    let message = '';
    if(error.error) {
      message = this.processarErrors(error.error);
    } else if(error.message){
      message = error.message;
    }
    this.subject.next(message);
    return throwError(() => new Error(message));
  }

  public handleError(error: string) {
    console.log('Error: ', error);
    this.subject.next(error);
    return throwError(() => new Error(error));
  }

  public errors(): Subject<string> {
    return this.subject;
  }

  private processarErrors(error: any): string{
    let message: string = '';
    
    if(error.error) {
      message = Object.values(JSON.parse(error.error)).join(', ');
    } else if (error.message) {
      message = error.message;
    } else if (error.error_message) {
      message = error.error_message;
    }

    return message;
  }
}
