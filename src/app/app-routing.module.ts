import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReservaComponent } from './components/create-reserva/create-reserva.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramaIndividualPeruComponent } from './components/programaIndividualPeru/programaIndividualPeru.component';
import { ReservaFinalComponent } from './components/reserva-final/reserva-final.component';

const routes: Routes = [

  /*{path:'create-reserva',component:CreateReservaComponent},*/
  {path:'fin-reserva', component: ReservaFinalComponent},
  {path:'individual-peru', component: ProgramaIndividualPeruComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
