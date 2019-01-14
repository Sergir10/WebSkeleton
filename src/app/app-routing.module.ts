import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SidebarMenuComponent } from './shared/components/sidebar-menu/sidebar-menu.component';
import { AuthGuard } from './shared/services/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: SidebarMenuComponent,
    //canActivate: [AuthGuard],
    children: [
      /* {
        path: '',
        component: LoginComponent,
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
