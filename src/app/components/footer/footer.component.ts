import { Component } from '@angular/core';
import { LogoDiamondComponent } from '../../icons/logo-diamond/logo-diamond.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoDiamondComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  goMaps() {
    window.open('https://maps.app.goo.gl/WThnArdnf3NtNKRT6', '_blank');
  }
}
