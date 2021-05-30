import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesComponent } from './movies/movies.component';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertifyService } from './sevices/alertify.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviesComponent,
    PersonComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
 
  ],
  providers: [
    AlertifyService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
