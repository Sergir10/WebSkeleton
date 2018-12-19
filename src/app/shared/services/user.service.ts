import { RELATIVE_PATH } from './constants/relativeURL.constants';
import { User } from '../model/user.model';
import { BaseService } from './utils/base.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService extends BaseService {

  private path = RELATIVE_PATH;

  public signUp(user: User) {
    return this.post(this.path.SIGN_UP, user, false);
  }

  public getUser() {
    const header = new HttpHeaders().set('Authorization', 'VALID_TOKEN');
    return this.get(this.path.GET_USER, false, header);
  }
}
