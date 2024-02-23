import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { LogoDiamondComponent } from './icons/logo-diamond/logo-diamond.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  LogoDiamondComponent,
  AboutUsComponent,
  QualificationsComponent,
  ServicesComponent,
  ContactComponent,
  FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Diamond-site';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToAnchor(anchor: string): void {
    const element = this.document.querySelector(`#${anchor}`);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
