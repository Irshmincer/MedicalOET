import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from 'src/components/coach/coach.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { PlansComponent } from 'src/components/plans/plans.component';
import { ViewcoachesComponent } from 'src/components/viewcoaches/viewcoaches.component';

const routes: Routes = [
  {path:'', component:CoachComponent},
  {path:'viewCoaches', component:ViewcoachesComponent},
  {path:'CoachPlan', component:PlansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
