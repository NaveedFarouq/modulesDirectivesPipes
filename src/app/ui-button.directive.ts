import { 
  Directive, 
  ElementRef, 
  HostListener } from '@angular/core';

@Directive({
  selector: '[appUiButton]'
})
export class UiButtonDirective {
  constructor(private el: ElementRef) {
    Object.assign(el.nativeElement.style, {
      backgroundColor: '#ff00a6', 
      padding: '7px 15px', 
      fontSize: '16px', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '4px'
    })
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#000';
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '#ff00a6';
  }
}