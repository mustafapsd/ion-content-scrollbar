import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIonScrollbar]'
})
export class IonScrollbarDirective implements AfterViewInit {

  @Input() scrollbarWidth = 3;
  @Input() scrollbarColor = 'var(--ion-color-primary)';
  @Input() scrollbarRound = true;


  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    try {
      const SHADOW = this.el.nativeElement.shadowRoot.querySelector('.inner-scroll') as HTMLElement;

      const style = document.createElement('style');
      // eslint-disable-next-line max-len
      style.innerHTML = `*::-webkit-scrollbar { width: ${this.scrollbarWidth}px; height: ${this.scrollbarWidth}px; }`;
      style.innerHTML += `*::-webkit-scrollbar-thumb { border-radius: ${this.scrollbarRound ? '7rem' : '0'}; 
      background: ${this.scrollbarColor}; }`;

      SHADOW.appendChild(style);
    } catch {
      setTimeout(() => {
        this.ngAfterViewInit();
      }, 30);
    }

  }
}
