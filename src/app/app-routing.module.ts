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
import { AngularTokenService } from 'angular-token';
import { CrearVoluntarioComponent } from './crear-voluntario/crear-voluntario.component';

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
  {path: "registrar", component: CrearVoluntarioComponent, canActivate: [AngularTokenService]}
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
