import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    LoginBarComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
