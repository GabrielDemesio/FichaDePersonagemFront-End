import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';
import { PersonagemDetailComponent } from './components/personagem-detail/personagem-detail.component';
import {PersonagemFormComponent} from './components/personagem-form/personagem-form.component';

export const routes: Routes = [
  { path: '', component: PersonagemListComponent },
  { path: 'personagem/:id', component: PersonagemDetailComponent },
  { path: 'novo-personagem', component: PersonagemFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
