import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  
  @Output() logged: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onLogon(){
    this.logged.emit(true)
  }

}
