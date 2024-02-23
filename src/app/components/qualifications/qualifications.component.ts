import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent {
  scrollPosition = 0;
  positionTemplate = 1;


  nextQualifications() {
    this.positionTemplate++;

    if(this.positionTemplate > 3) {
      this.positionTemplate = 1;
    }
  }

  prevQualifications() {
    this.positionTemplate--;

    if(this.positionTemplate < 1) {
      this.positionTemplate = 3;
    }
  }

  onRadioChange(newValue: number) {
    this.positionTemplate = newValue;
  }

}
