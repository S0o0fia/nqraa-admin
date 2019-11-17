import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html',
})
export class HeaderInnerComponent {
  constructor(private renderer: Renderer2,private route:Router,private translate: TranslateService,private rModule:AppRoutingModule) {
    this.renderer.addClass(document.body, 'toggle-sidebar-rtl');
  }
     

  signout(event){
    localStorage.setItem('isLoggedin', null);
    this.route.navigate(['/login']);

  }
}
