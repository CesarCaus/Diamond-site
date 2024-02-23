import { Component, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-diamond',
  standalone: true,
  imports: [],
  templateUrl: './logo-diamond.component.html',
  styleUrl: './logo-diamond.component.scss'
})
export class LogoDiamondComponent implements OnInit {
  @Input() classLogo: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.adicionarClasse();
  }

  adicionarClasse() {
    const minhaDiv = this.el.nativeElement.querySelector('div');
    if (minhaDiv) {
      this.renderer.addClass(minhaDiv, this.classLogo);
    }
  }
}
