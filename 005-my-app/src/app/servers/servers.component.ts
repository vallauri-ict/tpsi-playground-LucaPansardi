import { Component, OnInit } from '@angular/core';
/*import { Server } from 'tls';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';*/

@Component({
  selector: 'app-servers', //Coma tag
  //selector: '[app-servers]', //Come attributo del tag in cui è inserito
  //selector: '.app-servers',     //Come classe del tag in cui è inserito
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false; 
  serverName:string = '- digita qui il nome del tuo server -';
  serverCreationStatus:string = 'No server was created!';
  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true; 
      },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.serverName = '- digita qui il nome del tuo server -';
  }

  
}
