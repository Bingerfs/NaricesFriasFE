import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { AdoptadosComponent } from './adoptados/adoptados.component';
import { BuscadosComponent } from './buscados/buscados.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "adoptados", component: AdoptadosComponent },
  {path: "buscados", component: BuscadosComponent}
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
