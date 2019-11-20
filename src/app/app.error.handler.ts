import {HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {

    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;

        if (error instanceof Response) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.status}`;
        }else {
            errorMessage = error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
