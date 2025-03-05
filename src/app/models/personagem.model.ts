export interface Personagem {
  id: number;
  nome: string;
  raca:string;
  classe: string;
  nivel: number;
  experiencia: number;
  forca: number;
  destreza: number;
  inteligencia: number;
  carisma: number;
  vida: number;
  energia: number;
  mana: number;
  mostrarDetalhes?: boolean;
}
