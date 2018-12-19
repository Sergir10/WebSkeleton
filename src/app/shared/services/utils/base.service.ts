import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnackbarService } from './snackbar.service';
import { ENVIRONMENT } from '../constants/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  constructor(
    private http: HttpClient,
    public snackBarService: SnackbarService,
  ) { }

  private BASE_URL = ENVIRONMENT.development;

  protected post(relativeUrl: string, body: any, auth: boolean = true, headers: HttpHeaders = new HttpHeaders()) {
    if (!navigator.onLine) {
      this.snackBarService.openSnackBar('No hay conexión a internet');
    }
    return this.http.post(this.BASE_URL + relativeUrl, body, { headers, observe: 'response' });
  }

  protected get(relativeUrl: string, auth: boolean = true, headers: HttpHeaders = new HttpHeaders()) {
    if (!navigator.onLine) {
      this.snackBarService.openSnackBar('No hay conexión a internet');
    }
    return this.http.get(this.BASE_URL + relativeUrl, { headers, observe: 'response' });
  }
}
