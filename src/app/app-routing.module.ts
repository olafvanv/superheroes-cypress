import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesListComponent
  },
	{
		path: '**',
		redirectTo: '/heroes',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
