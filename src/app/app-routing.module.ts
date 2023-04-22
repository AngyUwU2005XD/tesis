import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Juegocinco1Component } from './Componentes/Cinco/juegocinco1/juegocinco1.component';
import { Juegocinco2Component } from './Componentes/Cinco/juegocinco2/juegocinco2.component';
import { Juegocinco3Component } from './Componentes/Cinco/juegocinco3/juegocinco3.component';
import { Juegocuatro1Component } from './Componentes/Cuatro/juegocuatro1/juegocuatro1.component';
import { Juegocuatro2Component } from './Componentes/Cuatro/juegocuatro2/juegocuatro2.component';
import { Juegocuatro3Component } from './Componentes/Cuatro/juegocuatro3/juegocuatro3.component';
import { Juegodos1Component } from './Componentes/Dos/juegodos1/juegodos1.component';
import { Juegodos2Component } from './Componentes/Dos/juegodos2/juegodos2.component';
import { Juegodos3Component } from './Componentes/Dos/juegodos3/juegodos3.component';
import { Juegodos4Component } from './componentes/dos/juegodos4/juegodos4.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { MenujuegosComponent } from './Componentes/menujuegos/menujuegos.component';
import { Juegonueve1Component } from './Componentes/Nueve/juegonueve1/juegonueve1.component';
import { Juegonueve2Component } from './Componentes/Nueve/juegonueve2/juegonueve2.component';
import { Juegonueve3Component } from './Componentes/Nueve/juegonueve3/juegonueve3.component';
import { Juegoocho1Component } from './Componentes/Ocho/juegoocho1/juegoocho1.component';
import { Juegoocho2Component } from './Componentes/Ocho/juegoocho2/juegoocho2.component';
import { Juegoocho3Component } from './Componentes/Ocho/juegoocho3/juegoocho3.component';
import { Juegoseis1Component } from './Componentes/Seis/juegoseis1/juegoseis1.component';
import { Juegoseis2Component } from './Componentes/Seis/juegoseis2/juegoseis2.component';
import { Juegoseis3Component } from './Componentes/Seis/juegoseis3/juegoseis3.component';
import { Juegosiete1Component } from './Componentes/Siete/juegosiete1/juegosiete1.component';
import { Juegosiete2Component } from './Componentes/Siete/juegosiete2/juegosiete2.component';
import { Juegosiete3Component } from './Componentes/Siete/juegosiete3/juegosiete3.component';
import { Juegotres1Component } from './Componentes/Tres/juegotres1/juegotres1.component';
import { Juegotres2Component } from './Componentes/Tres/juegotres2/juegotres2.component';
import { Juegotres3Component } from './Componentes/Tres/juegotres3/juegotres3.component';
import { Juegouno1Component } from './Componentes/Uno/juegouno1/juegouno1.component';
import { Juegouno2Component } from './Componentes/Uno/juegouno2/juegouno2.component';
import { Juegouno3Component } from './Componentes/Uno/juegouno3/juegouno3.component';
import { MenuprincipalComponent } from './Componentes/menuprincipal/menuprincipal.component';
import { Menu3Component } from './Componentes/menu3/menu3.component';
import { Menu4Component } from './Componentes/menu4/menu4.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'menu', component: MenujuegosComponent
  },
  {
    path: 'menup', component: MenuprincipalComponent
  },
  {
    path: 'menu3', component: Menu3Component
  },
  {
    path: 'menu4', component: Menu4Component
  },
  {
    path: 'Juegouno1', component: Juegouno1Component
  },
  {
    path: 'Juegouno2', component: Juegouno2Component
  },
  {
    path: 'Juegouno3', component: Juegouno3Component
  },
  {
    path: 'Juegodos1', component: Juegodos1Component
  },
  {
    path: 'Juegodos2', component: Juegodos2Component
  },
  {
    path: 'Juegodos3', component: Juegodos3Component
  },
  {
    path: 'Juegodos4', component: Juegodos4Component
  },
  {
    path: 'Juegotres1', component: Juegotres1Component
  },
  {
    path: 'Juegotres2', component: Juegotres2Component
  },
  {
    path: 'Juegotres3', component: Juegotres3Component
  },
  {
    path: 'Juegocuatro1', component: Juegocuatro1Component
  },
  {
    path: 'Juegocuatro2', component: Juegocuatro2Component
  },
  {
    path: 'Juegocuatro3', component: Juegocuatro3Component
  },
  {
    path: 'Juegocinco1', component: Juegocinco1Component
  },
  {
    path: 'Juegocinco2', component: Juegocinco2Component
  },
  {
    path: 'Juegocinco3', component: Juegocinco3Component
  },
  {
    path: 'Juegoseis1', component: Juegoseis1Component
  },
  {
    path: 'Juegoseis2', component: Juegoseis2Component
  },
  {
    path: 'Juegoseis3', component: Juegoseis3Component
  },
  {
    path: 'Juegosiete1', component: Juegosiete1Component
  },
  {
    path: 'Juegosiete2', component: Juegosiete2Component
  },
  {
    path: 'Juegosiete3', component: Juegosiete3Component
  },
  {
    path: 'Juegoocho1', component: Juegoocho1Component
  },
  {
    path: 'Juegoocho2', component: Juegoocho2Component
  },
  {
    path: 'Juegoocho3', component: Juegoocho3Component
  },
  {
    path: 'Juegonueve1', component: Juegonueve1Component
  },
  {
    path: 'Juegonueve2', component: Juegonueve2Component
  },
  {
    path: 'Juegonueve3', component: Juegonueve3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
