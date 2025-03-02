import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../services/personagem.service';
import { Personagem } from '../../models/personagem.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-personagem-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.css']
})
export class PersonagemListComponent implements OnInit {
  personagens: Personagem[] = [];

  constructor(private personagemService: PersonagemService) {}

  ngOnInit(): void {
    this.carregarPersonagens();
  }

  carregarPersonagens(): void {
    this.personagemService.getPersonagens().subscribe(
      (data) => {
        this.personagens = data.map(personagem => ({ ...personagem, mostrarDetalhes: false }));
        console.log('Dados recebidos:', data);
      },
      (error) => console.error('Erro ao carregar personagens', error)
    );
  }

  toggleDetalhes(personagem: Personagem): void {
    personagem.mostrarDetalhes = !personagem.mostrarDetalhes;
  }
}
