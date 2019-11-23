import {HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    handleError(error: HttpErrorResponse | any) {
        super.handleError(error);
    }
}
