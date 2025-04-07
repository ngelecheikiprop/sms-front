import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, LoginComponent],
  template: `
  <app-menu/>
  <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'sms-front';
}
