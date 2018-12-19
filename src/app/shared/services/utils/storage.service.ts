
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { JwtHelperService } from '@auth0/angular-jwt';

import { LOCAL_STORAGE } from '../constants/constants';
/* see: https://github.com/auth0/angular2-jwt -> This library is only used for JSON Web Token(JWT) Decoder. */
/* see: https://github.com/cyrilletuzi/angular-async-local-storage */

@Injectable()
export class StorageService {

  private jwt: any;
  public showLoadingHUD = false;

  constructor(protected localStorage: LocalStorage) {
    this.jwt = new JwtHelperService();
  }

  public getJWTClaims(token: any): any {
    return this.jwt.decodeToken(token);
  }

  public setItem(key: any, value: any) {
    return this.localStorage.setItem(key, value);
  }

  public getItem(key: any) {
    return this.localStorage.getItem(key);
  }

  public logout() {
    return this.localStorage.clear();
  }
}
