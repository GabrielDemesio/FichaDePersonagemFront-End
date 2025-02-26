import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personagem } from '../../models/personagem.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./personagem-form.component.css']
})
export class PersonagemFormComponent {
  @Input() personagem: Personagem = {
    id: 0,
    name: '',
    classe: '',
    nivel: 1,
    raca: '',
    forca: 10,
    destreza: 10,
    inteligencia: 10,
    experiencia: 0,
    vida: 100,
    carisma: 10,
    energia: 10,
    mana: 10
  };

  @Output() salvar = new EventEmitter<Personagem>();

  onSubmit(): void {
    this.salvar.emit(this.personagem);
  }
}
