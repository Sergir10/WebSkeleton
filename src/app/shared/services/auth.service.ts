import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './utils/base.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RELATIVE_PATH, AUTHORIZATION } from './constants/relativeURL.constants';
import { SnackbarService } from './utils/snackbar.service';
import { LOCAL_STORAGE, ROUTING } from './constants/constants';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private path = RELATIVE_PATH;
  private currentTokenSubjet: BehaviorSubject<any>;
  public currentToken$: Observable<any>;

  constructor(
    http: HttpClient,
    snackbarService: SnackbarService,
    private router: Router
  ) {
    super(http, snackbarService);

    this.currentTokenSubjet = new BehaviorSubject<any>(localStorage.getItem(LOCAL_STORAGE.TOKEN));
    this.currentToken$ = this.currentTokenSubjet.asObservable();
  }

  public get currentTokenValue() {
    return this.currentTokenSubjet.value;
  }

  public login(username: any, password: any) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { 'email': username, 'password': password };

    return this.post(this.path.LOGIN, body, false, header).pipe(
      map(resp => {
        const token = resp.headers.get(AUTHORIZATION);
        if (token) {
          localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
          this.currentTokenSubjet.next(token);
        }
        return token;
      }));
  }

  public logout() {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
    this.currentTokenSubjet.next(null);
    this.router.navigate([ROUTING.LOGIN]);
  }
}
