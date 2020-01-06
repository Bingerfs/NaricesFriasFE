import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

import { ListaVoluntariosComponent } from './voluntario/lista-voluntarios/lista-voluntarios.component';
import { BuscadosCreateComponent } from './buscados-create/buscados-create.component';
import { ExtraviadosCreateComponent } from './extraviados-create/extraviados-create.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';
import { ApadrinamientoCreateComponent } from './apadrinamiento-create/apadrinamiento-create.component';
import {NgbdModalBasic} from './Pop-up/modal-basic';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { AgradecimientosCreateComponent } from './agradecimientos-create/agradecimientos-create.component';
import { ProfileComponent } from './profile/profile.component';

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
    EventoCreateComponent,
    ListaVoluntariosComponent,
    BuscadosCreateComponent,
    ExtraviadosCreateComponent,
    UploadImagesComponent,
    ApadrinamientoComponent,
    NgbdModalBasic,
    ApadrinamientoCreateComponent,
    AgradecimientosComponent,
    AgradecimientosCreateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularTokenModule.forRoot({
      apiBase: 'https://idrkman.herokuapp.com/',
      userTypes: [
        {name: 'ADMIN', path: 'admin'},
        {name: 'VOL', path: ''}
      ],
    })
  ],
  exports: [HomeComponent],
  // providers: [ApiService, AngularTokenModule, { provide: LOCALE_ID, useValue: 'es' }],
  providers: [ApiService, AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
