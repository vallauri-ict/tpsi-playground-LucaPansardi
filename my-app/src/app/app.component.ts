import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["prova1","prova2","prova3","prova4","prova5","prova6","prova7","prova8","prova9","prova10"];
  myName = 'Luca Pansardi';
  index;

  changeName(){
    this.index = Math.floor((Math.random() * 10) + 1);
    this.myName = this.names[this.index];
  }
}
