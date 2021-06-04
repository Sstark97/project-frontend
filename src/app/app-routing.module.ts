import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindPasswordComponent } from './components/remind-password/remind-password.component';
import { SocialMediaAccountsComponent } from './components/social-media-accounts/social-media-accounts.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent,
},
{
   path: 'remind-password',
   component: RemindPasswordComponent,
 },
 {
  path : "dashboard",
  component : DashboardComponent
  },
  {
   path : "dashboard/social-media-accounts",
   component : SocialMediaAccountsComponent
   },
   {
    path : "dashboard/post-content",
    component : PostContentComponent
    },
    {
     path : "dashboard/profile",
     component : ProfileComponent
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
