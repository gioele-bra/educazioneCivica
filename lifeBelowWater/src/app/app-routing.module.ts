import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecieComponent } from './specie/specie.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'specie/:id', component:  SpecieComponent},
  { path: 'search', component: SearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
