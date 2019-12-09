import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';

import { AdoptadosComponent } from './adoptados/adoptados.component';


import { BuscadosComponent } from './buscados/buscados.component';
import { ExtraviadosComponent } from './extraviados/extraviados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SigninComponent } from './signin/signin.component';
import { AdoptadosCreateComponent } from './adoptados-create/adoptados-create.component'
import {EventosComponent} from './eventos/eventos.component'
import { AngularTokenService } from 'angular-token';
import { RoleGuardService} from './role-guard.service';
import { CrearVoluntarioComponent } from './crear-voluntario/crear-voluntario.component';
import {ExtraviadoDetailComponent} from './extraviado-detail/extraviado-detail.component';
import {BuscadoDetailComponent} from './buscado-detail/buscado-detail.component';
import {AdoptadoDetailComponent} from './adoptado-detail/adoptado-detail.component';
import { ListaVoluntariosComponent } from './voluntario/lista-voluntarios/lista-voluntarios.component';
import {BuscadosCreateComponent} from './buscados-create/buscados-create.component';
import {ExtraviadosCreateComponent} from './extraviados-create/extraviados-create.component';
import {UploadImagesComponent} from './upload-images/upload-images.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';
import { ApadrinamientoCreateComponent } from './apadrinamiento-create/apadrinamiento-create.component';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "adoptados", component: AdoptadosComponent},
  { path: "signin", component: SigninComponent},
  { path: "crearAdoptado", component: AdoptadosCreateComponent, canActivate: [AngularTokenService] },
  { path: "crearAdoptado/:id", component: AdoptadosCreateComponent, canActivate: [AngularTokenService] },
  {path: "buscados", component: BuscadosComponent},
  {path: "extraviados", component: ExtraviadosComponent},
  {path: "contacto", component: ContactoComponent},
  // {path: "registrar", component: CrearVoluntarioComponent},
   {path: "registrar", component: CrearVoluntarioComponent, canActivate: [RoleGuardService], 
   data: { 
     expectedRole: 'ADMIN'
   } },
  { path: "crearAdoptado/:id", component: AdoptadosCreateComponent, canActivate: [AngularTokenService] },
  {path: "extraviados/:id", component: ExtraviadoDetailComponent},
  {path:"buscados/:id", component: BuscadoDetailComponent},
  {path:"adoptados/:id", component: AdoptadoDetailComponent},
   { path: "calendario", component: EventosComponent },
  //  {path: "voluntarios", component: ListaVoluntariosComponent},
    {path: "voluntarios", component: ListaVoluntariosComponent, canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'ADMIN'
    } },
  { path: "calendario", component: EventosComponent },
  {path: "crearBuscado",component: BuscadosCreateComponent, canActivate: [AngularTokenService]},
  {path: "crearBuscado/:id", component: BuscadosCreateComponent, canActivate: [AngularTokenService]},
  {path: "crearExtraviado",component: ExtraviadosCreateComponent, canActivate: [AngularTokenService]},
  {path: "crearExtraviado/:id", component: ExtraviadosCreateComponent, canActivate: [AngularTokenService]},
  {path: "cargarImagen",component: UploadImagesComponent},
  {path: "adoptados/:id",component: AdoptadoDetailComponent},
  {path: "apadrinamientos",component: ApadrinamientoComponent},
  {path: "crearApadrinamiento",component: ApadrinamientoCreateComponent, canActivate: [AngularTokenService]},
  {path: "crearApadrinamiento/:id",component: ApadrinamientoCreateComponent, canActivate: [AngularTokenService]}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
