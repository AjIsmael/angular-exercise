import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ListService } from '../list.service';
import {AccountDetail} from './accountdetail.pipe';
import {OrderByPipe} from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountDetailsComponent,
    AccountDetail,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    AccountDetail,
    OrderByPipe
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
