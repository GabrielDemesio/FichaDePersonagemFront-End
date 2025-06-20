import { Routes } from '@angular/router';
import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';
import { PersonagemFormComponent } from './components/personagem-form/personagem-form.component';
import { PersonagemDetailComponent } from './components/personagem-detail/personagem-detail.component';

export const routes: Routes = [
  { path: '', component: PersonagemListComponent },
  { path: 'novo-personagem', component: PersonagemFormComponent },
  { path: 'personagem/:id', component: PersonagemDetailComponent },
  { path: 'personagem/:id/editar', component: PersonagemFormComponent }
];
