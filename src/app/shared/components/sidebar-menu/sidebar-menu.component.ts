import { Subscription } from 'rxjs';
import { StorageService } from './../../services/utils/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MENU_OPTIONS } from '../../services/constants/menu.constants';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public menuOptions = MENU_OPTIONS;
  private token: any;
  private currentTokenSubscription: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: AuthService,
    private storageService: StorageService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.storageService.setItem('token', '12345').subscribe(() => {
      console.log('success');
    });
    console.log(localStorage.getItem('token'));

    this.currentTokenSubscription = this.authService.currentToken$.subscribe(token => {
      this.token = token;
      this.loadUserData(this.token);
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.currentTokenSubscription.unsubscribe();
  }

  private loadUserData(token: any) {
    console.log('USER', this.storageService.getJWTClaims(token));
  }

  private logout() {
    this.authService.logout();
  }

}
