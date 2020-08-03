import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userDetailsService/user-service.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    test : Date = new Date();
    focus : boolean;
    focus1 : boolean;

    result : any;
    username : any;
    password : any;
    constructor(private userService : UserServiceService, private router:Router) { 
        // this.userService = userServiceInitial;
    }

    ngOnInit():void {}

    onSignIn(){
        // console.log(this.username + this.password);
        if(this.username && this.password){
            this.userService.authenticate(this.username,this.password).subscribe(
                data=>
                {
                    this.userService.isLoggedIn(true);
                    this.router.navigateByUrl("/feed");
                }
            );
        }
        else{
            alert("fields can not be null"); 
        }
    }
}