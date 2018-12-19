import { SnackbarService } from './../../services/utils/snackbar.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTING, HTTP_STATUS, MESSAGE } from '../../services/constants/constants';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {
    this.validateToken();
  }

  ngOnInit() {
    this.createFormGroupInstance();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || ROUTING.HOME;
  }

  private createFormGroupInstance() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(8))
    });
  }

  private validateToken() {
    if (this.authService.currentTokenValue) {
      this.router.navigate([ROUTING.HOME]);
    }
  }

  private login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).pipe(first()).subscribe(_ => {
      this.router.navigate([this.returnUrl]);
    }, err => {
      if (err.status === HTTP_STATUS.FORBIDDEN) {
        this.snackbarService.openSnackBar(MESSAGE.LOGIN_INCORRECT);
      }
    });
  }

  private logout() {
    this.authService.logout();
  }
}
