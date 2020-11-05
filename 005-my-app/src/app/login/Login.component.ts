import { Component, OnInit } from '@angular/core';

@Component({
    selector:"app-logins",
    templateUrl:"./Login.component.html",
    styleUrls: ["./Login.component.css"]
    })
    export class LoginComponent implements OnInit{
        allowBtnClick:boolean = true;
        username:string = '';
        usernameUpdated:string = 'No username inserted';

        displayUsername(){
            this.usernameUpdated = 'Username: ' + this.username;
            this.username = '';
            this.allowBtnClick = false;
        }

        allow($event){
            if($event.target.value = ""){
                this.allowBtnClick = false;
           }
           else
           {
                this.allowBtnClick = true;
                this.usernameUpdated = 'No username inserted';
           }
        }

        deleteUsername(){
            this.username = '';
            this.usernameUpdated = 'Username: ';        
            this.allowBtnClick = true;
        }

        ngOnInit(): void {
        }

    }