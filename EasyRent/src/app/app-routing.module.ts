import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './rent/gallery/gallery.component';
import { CarImageComponent } from './rent/car-image/car-image.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyMainComponent } from './components/my-main/my-main.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  {path: '', component: MyMainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'image/:id', component: CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
