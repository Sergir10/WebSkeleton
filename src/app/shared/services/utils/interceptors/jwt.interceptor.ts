import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../../constants/constants';
import { AuthService } from '../../auth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* Add authorization header with jwt token if it is avaible */
    const currentUserToken = this.authService.currentTokenValue;
    if (currentUserToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUserToken}`
        }
      });
    }
    return next.handle(request);
  }
}
