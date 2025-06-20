import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personagem } from '../models/personagem.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  private apiUrl = '/api/personagens';
  private apiAiUrl = '/api/ai'; // URL base para a IA

  constructor(private http: HttpClient) {}

  getPersonagens(): Observable<Personagem[]> {
    return this.http.get<Personagem[]>(this.apiUrl);
  }

  getPersonagem(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.apiUrl}/${id}`);
  }

  createPersonagem(personagem: Personagem): Observable<Personagem> {
    return this.http.post<Personagem>(this.apiUrl, personagem);
  }

  updatePersonagem(id: number, personagem: Personagem): Observable<Personagem> {
    return this.http.put<Personagem>(`${this.apiUrl}/${id}`, personagem);
  }

  deletePersonagem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // NOVO MÉTODO PARA CHAMAR A IA NO BACKEND
  gerarHistoria(dados: { nome: string, raca: string, classe: string }): Observable<{ historia: string }> {
    return this.http.post<{ historia: string }>(`${this.apiAiUrl}/gerar-historia`, dados);
  }
}
