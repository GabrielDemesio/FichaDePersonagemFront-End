import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Personagem} from '../../models/personagem.model';
import {PersonagemService} from '../../services/personagem.service';
import {CommonModule} from '@angular/common';

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

  constructor(private personagemService: PersonagemService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.personagemService.createPersonagem(this.personagem).subscribe(
      response => {
        console.log('Personagem criado com sucesso', response);
      },
      error => {
        console.error('Erro ao criar personagem', error);
      }
    );
  }
}
