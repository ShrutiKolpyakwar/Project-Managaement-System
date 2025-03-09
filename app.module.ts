import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { ProjectComponent } from './project/project.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    MailComponent,
    ProjectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
