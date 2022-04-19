import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {

  constructor(private elem: ElementRef) {
   
    this.elem.nativeElement.opacity = 0;

  }

  @HostListener('mouseover')
  onMouseOver() {
    this.elem.nativeElement.opacity = 0.9
  
  }

  @HostListener('mouseout')
  onMouseOut() {

    this.elem.nativeElement.opacity = 0;

   }
}
