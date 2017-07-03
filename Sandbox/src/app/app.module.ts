import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginContainerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginContainerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
