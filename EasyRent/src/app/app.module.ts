import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MyButtonComponent } from './atoms/my-button/my-button.component';
import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyCarouselComponent } from './components/my-carousel/my-carousel.component';
import { MyJumbotronComponent } from './components/my-jumbotron/my-jumbotron.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyFeaturesComponent } from './components/my-features/my-features.component';
import { MyMainFeatureComponent } from './components/my-main-feature/my-main-feature.component';
import { MyMainComponent } from './components/my-main/my-main.component';
import { MyHomePageComponent } from './my-home-page/my-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MyButtonComponent,
    MyNavbarComponent,
    MyHeaderComponent,
    MyCarouselComponent,
    MyJumbotronComponent,
    MyFooterComponent,
    MyFeaturesComponent,
    MyMainFeatureComponent,
    MyMainComponent,
    MyHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }