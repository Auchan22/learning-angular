import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NombresService {
  private nombre: string[] = ['Juan', 'Miguel', 'Agus', 'Benito'];

  constructor() {}

  public getNombres(): string[] {
    return this.nombre;
  }
}
