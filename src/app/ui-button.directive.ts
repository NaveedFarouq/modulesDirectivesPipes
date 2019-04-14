import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUiButton]'
})
export class UiButtonDirective {

  constructor( elementRef: ElementRef) { 

  
    Object.assign(elementRef.nativeElement.style, {
      backgroundColor: '#ff00a6',
      padding: '7px 15px',
      fontSize: '16px',
      color: '#fff',
      border: 'none',
      borderRadius: '4px'
    })
  }


}
