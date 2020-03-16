import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthService} from './services/auth.service';
import { UserService} from './services/user.service';
import { TokenIntercepterService} from './services/token-intercepter.service';
import { DataTablesModule } from 'angular-datatables';

import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
