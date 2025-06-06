import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Personagem} from '../../models/personagem.model';
import {PersonagemService} from '../../services/personagem.service';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.component.html',
  imports: [
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./personagem-form.component.css']
})
export class PersonagemFormComponent {
  showForm = false;

  personagem: Personagem = {
    carisma: 0,
    destreza: 0,
    energia: 0,
    experiencia: 0,
    forca: 0,
    id: 0,
    inteligencia: 0,
    mana: 0,
    nivel: 0,
    raca: '',
    vida: 0,
    nome: '',
    classe: ''
  };

  creationSuccess = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private personagemService: PersonagemService, private router: Router) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.successMessage = null;
    this.errorMessage = null;

    this.personagemService.createPersonagem(this.personagem).subscribe({
      next: (response) => {
        console.log('Personagem criado com sucesso', response);
        this.successMessage = `Personagem "${response.nome}" foi forjado na batalha!`;
        this.creationSuccess = true; // 4. Altera a flag para mostrar o botão "Voltar"
      },
      error: (error) => {
        console.error('Erro ao criar personagem', error);
        this.errorMessage = 'A magia falhou! Verifique os dados e tente novamente.';
      }
    });
  }
  voltarParaLista(): void {
    this.router.navigate(['/']);
  }
}
