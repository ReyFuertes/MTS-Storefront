import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, tap, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { GenericDestroyComponent } from '../shared/generics/generic-destroy';

@Injectable()
export class TokenInterceptor extends GenericDestroyComponent implements HttpInterceptor {

  constructor(private store: Store<AppState>, private router: Router) {
    super();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        /* handle 500 error */
        if (error instanceof HttpErrorResponse && error.status === 500 || error.status === 422) {
 
          // this.store.dispatch(appNotificationAction({
          //   notification: {
          //     success: false,
          //     message: error?.error?.errors || error.statusText
          //   }
          // }));
          return throwError(error);
        }

        /* handle only 401 unauthorized */
        if (error instanceof HttpErrorResponse && error.status === 401) {
          from(this.handleRequest(request));
          return throwError(error);
        }
        return next.handle(request);
      })
    );
  }

  private async handleRequest(request: HttpRequest<any>) {
    localStorage.clear();
    /* logout action here */
    this.router.navigateByUrl('/login');
  }
}
