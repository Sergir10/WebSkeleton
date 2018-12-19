import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';

import {
  MatButtonModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule, MatListModule,
  MatSlideToggleModule, MatButtonToggleModule, MatCheckboxModule, MatCardModule, MatDialogModule, MatStepperModule,
  MatTableModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatGridListModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackbarService } from './shared/services/utils/snackbar.service';
import { UserService } from './shared/services/user.service';
import { SidebarMenuComponent } from './shared/components/sidebar-menu/sidebar-menu.component';
import { JWTInterceptor } from './shared/services/utils/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './shared/services/utils/interceptors/error.interceptor';
import { StorageService } from './shared/services/utils/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarMenuComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SnackbarService,
    UserService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


