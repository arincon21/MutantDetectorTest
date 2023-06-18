import { Component } from '@angular/core';

@Component({
  selector: 'app-mutant-detector',
  templateUrl: './mutant-detector.component.html',
  styleUrls: ['./mutant-detector.component.scss']
})
export class MutantDetectorComponent {
  dna: string[] = [];
  isMutantResult: boolean | undefined;
  isArray: boolean | undefined;

  changeDNA(event: any){
    this.dna = [];
    this.dna = JSON.parse(event.currentTarget.value)
  }

  detectIsMutants(): void {
    if(Array.isArray(this.dna) && this.dna.length){
      this.isMutantResult = this.isMutant(this.dna);
      this.isArray = undefined;
    }else{
      this.isMutantResult = undefined;
      this.isArray = false;
    }
    
  }

  private isMutant(dna: string[]): boolean {
    const n = dna.length;
    const matrix = dna.map(row => row.split(''));
  
    // Función auxiliar para comprobar si una secuencia es válida
    function checkSequence(sequence: string): boolean {
      // Verificar si la secuencia contiene más de una ocurrencia de cuatro letras iguales
      const regex = /(A{4}|T{4}|C{4}|G{4})/;
      return regex.test(sequence);
    }
  
    // Verificar filas horizontales
    for (let i = 0; i < n; i++) {
      if (checkSequence(matrix[i].join(''))) {
        return true;
      }
    }
  
    // Verificar columnas verticales
    for (let j = 0; j < n; j++) {
      let sequence = '';
      for (let i = 0; i < n; i++) {
        sequence += matrix[i][j];
      }
      if (checkSequence(sequence)) {
        return true;
      }
    }
  
    // Verificar diagonales principales y secundarias
    for (let i = 0; i < n; i++) {
      let sequenceMain = '';
      let sequenceSecondary = '';
      for (let j = 0; j < n - i; j++) {
        sequenceMain += matrix[i + j][j];
        sequenceSecondary += matrix[j][i + j];
      }
      if (checkSequence(sequenceMain) || checkSequence(sequenceSecondary)) {
        return true;
      }
    }
  
    // No se encontraron secuencias de mutantes
    return false;
  }
  


}
