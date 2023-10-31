import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

/* 
    Custom error handler to take care of any uncought errors. 
    This could be implemented further to log errors to a service like Sentry.
    Depending on the error, we could also show a toast message to the user.
    It's provided in the AppModule to be used globally.
*/

@Injectable()
export class ErrorsHandler implements ErrorHandler {
    handleError(error: Error | HttpErrorResponse) {
        if (error instanceof ErrorEvent) {
            console.log('application error :/');
        } else if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                console.error('offline?');
            } else {
                console.log('Server error', error.status, error.message);
            }
        } else {
            console.error('Application error', error);
        }
        return throwError(() => new Error(error.message));
    }
}
