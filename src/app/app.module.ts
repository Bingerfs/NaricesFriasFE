import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AdoptadosComponent } from './adoptados/adoptados.component';
import { ApiService } from './api.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BuscadosComponent } from './buscados/buscados.component';
import { BuscadoDetailComponent } from './buscado-detail/buscado-detail.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms'
import { AngularTokenModule } from 'angular-token';
import { AdoptadosCreateComponent } from './adoptados-create/adoptados-create.component';
import { ExtraviadosComponent } from './extraviados/extraviados.component';
import { ExtraviadoDetailComponent } from './extraviado-detail/extraviado-detail.component';
import { ContactoComponent } from './contacto/contacto.component'


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    LoginBarComponent,
    BottomBarComponent,
    AdoptadosComponent,
    BuscadosComponent,
    BuscadoDetailComponent,
    SigninComponent,
    AdoptadosCreateComponent,
    ExtraviadosComponent,
    ExtraviadoDetailComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000',
      userTypes: [
        {name: 'ADMIN', path: 'admin'}
      ],
    })

  ],
  exports: [HomeComponent],
  providers: [ApiService, AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
