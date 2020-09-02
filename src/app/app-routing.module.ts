import { AppComponent } from './app.component';
import { PresupuestoComponent } from './component/presupuesto/presupuesto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'presupuesto', component:PresupuestoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
