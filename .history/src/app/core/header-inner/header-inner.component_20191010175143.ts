import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {
  togleclass() {
    this.renderer.addClass(document.body, currentUrlSlug);
    console.log('toggle called');
  }
}
