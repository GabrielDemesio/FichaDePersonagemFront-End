import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';
import { PersonagemDetailComponent } from './components/personagem-detail/personagem-detail.component';

export const routes: Routes = [
  { path: '', component: PersonagemListComponent }, // Rota padrão
  { path: 'personagem/:id', component: PersonagemDetailComponent },
  { path: '**', redirectTo: '' } // Rota curinga (redireciona para a rota padrão)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
