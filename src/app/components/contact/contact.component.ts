import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  functionTemp(event: any) {
    event.preventDefault();

    var inputs = document.querySelectorAll('input');
    var textareas = document.querySelectorAll('textarea')

    inputs.forEach((input: HTMLInputElement) => {
      input.value = ''
    });
  }
}
