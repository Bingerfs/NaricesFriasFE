import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AdoptadosComponent } from './adoptados/adoptados.component';
import { BuscadosComponent } from './buscados/buscados.component';
import { BuscadoDetailComponent } from './buscado-detail/buscado-detail.component';
import { SigninComponent } from './signin/signin.component';
import { AngularTokenModule } from 'angular-token';
import { AdoptadosCreateComponent } from './adoptados-create/adoptados-create.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component'
import { ExtraviadosComponent } from './extraviados/extraviados.component';
import { ExtraviadoDetailComponent } from './extraviado-detail/extraviado-detail.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdoptadoDetailComponent } from './adoptado-detail/adoptado-detail.component';
import { CrearVoluntarioComponent } from './crear-voluntario/crear-voluntario.component';

import { ApiService } from './api.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventoCreateComponent } from './evento-create/evento-create.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

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
    EventosComponent,
    EventoDetailComponent,
    ExtraviadosComponent,
    ExtraviadoDetailComponent,
    ContactoComponent,
    AdoptadoDetailComponent,
    CrearVoluntarioComponent,
    EventoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000',
      userTypes: [
        {name: 'ADMIN', path: 'admin'}
      ],
    })
  ],
  exports: [HomeComponent],
  // providers: [ApiService, AngularTokenModule, { provide: LOCALE_ID, useValue: 'es' }],
  providers: [ApiService, AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
