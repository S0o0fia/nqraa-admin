import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {
  previousUrl: string;
  constructor(private renderer: Renderer2) {
    // this.renderer.addClass(document.body, 'modal-open');
   }
  togleclass() {
    if (this.previousUrl) {
      this.renderer.removeClass(document.body, 'toggle-sidebar-rtl');
      this.previousUrl = '';
      console.log('removed');
    } else {
      this.previousUrl = 'toggle-sidebar-rtl';
      this.renderer.addClass(document.body, 'toggle-sidebar-rtl');
      console.log('added');
    }
  }
}
