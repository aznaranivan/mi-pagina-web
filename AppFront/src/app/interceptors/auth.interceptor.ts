import { 
  HttpEvent, 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest 
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): 
  Observable<HttpEvent<unknown>> {

    let clonedRequest = request;

    if(localStorage.getItem('token_usuarios')) {
      clonedRequest = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token_usuarios')!
        }
      })
    }

    return next.handle(clonedRequest);
  }
}

