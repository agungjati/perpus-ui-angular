import { Component } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  logged : boolean;
  onLogon()
  {
    this.logged = true;
  }
}
