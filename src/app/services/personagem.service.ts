import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personagem } from '../models/personagem.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  private apiUrl = '/api/personagens';
  private apiUrlRegister = '/api/register';

  constructor(private http: HttpClient) {}

  getPersonagens(): Observable<Personagem[]> {
    return this.http.get<Personagem[]>(this.apiUrl);
  }

  getPersonagem(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.apiUrl}/${id}`);
  }

  createPersonagem(personagem: Personagem): Observable<Personagem> {
    return this.http.post<Personagem>(this.apiUrlRegister, personagem);
  }

  updatePersonagem(id: number, personagem: Personagem): Observable<Personagem> {
    return this.http.put<Personagem>(`${this.apiUrl}/${id}`, personagem);
  }

  deletePersonagem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
