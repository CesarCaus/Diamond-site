import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  descriptions = [
    { title: 'Liquído Penetrante', description: 'Ensaio utilizado em materiais não ferrosos como: Cubos de Alumínio, Bloco do Motor, Fuselagem, Roda e Trem de Pouso.' },
    { title: 'Partículas Magnéticas (Magnaflux)', description: 'Ensaio utilizado em materiais ferrosos como: Cubo de aço, Pista, Eixo (Motor e Hélice), Engrenagem.' },
    { title: 'Correntes Parasitas (Eddy Current)', description: 'Ensaio utilizado em materiais ferrosos como: Cubo de aço, Pista, Eixo (Motor e Hélice), Engrenagem.' },
    { title: 'Tratamento de Superfícies', description: 'Banho de Cádmio e Alodine para tratamento da superfície das pás de hélice.' }
  ];

  descriptionsHover = { title: '', description: '' };

showDescription(description: any): void {
  this.descriptionsHover = description;
}

}
