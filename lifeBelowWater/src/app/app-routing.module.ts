import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EssayComponent } from './essay/essay.component';
import { FungiComponent } from './fungi/fungi.component';
import { PlantaeComponent } from './plantae/plantae.component';
import { AnimaliaComponent } from './animalia/animalia.component';

const routes: Routes = [
  { path: 'animalia', component: AnimaliaComponent },
  { path: 'plantae', component: PlantaeComponent },
  { path: 'fungi', component: FungiComponent },
  { path: 'home', component: EssayComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
