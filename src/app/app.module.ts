import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ResetComponent } from './reset/reset.component';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { ForgetComponent } from './forget/forget.component';
import { VerfifyStringComponent } from './verfify-string/verfify-string.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ResetComponent,
    ActiveAccountComponent,
    ForgetComponent,
    VerfifyStringComponent,
    InvoiceCreateComponent,
    InvoiceListComponent
  ],
  imports: [
    AppRoutingModule,
    DashboardModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
