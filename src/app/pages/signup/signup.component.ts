import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userDetailsService/user-service.service';
import { User } from "src/app/model/User";
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { NumberFormatStyle } from '@angular/common';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    result: any;
    alert: String;
    validate: Boolean;
    firstname; 
    lastname; 
    username; 
    email;
    password;
    
    newUser : User = new User();
    
    constructor(private userservice:UserServiceService, private router:Router) { }

    ngOnInit():void {
        this.userservice.getUsers().subscribe(res => {
            this.result = res;
            console.log(this.result);
        });
    }

    change(e) {
        for (let i = 0; i < this.result.length; i++) {
            if (this.result[i].username == e) {
                this.alert = "username already exist";
                this.validate = true;
                break;
            }
            else {
                this.alert = "";
                this.validate = false;
            }
        }
    }

    submit1(){
        alert("Successfully registered");
        const user = {
            firstname : this.firstname,
            lastname : this.lastname,
            username : this.username,
            email : this.email,
            password : this.password,
            imageId : null,
            backgroundImageId : null,
            bio : null,
            profileType : false,
            points : 0
        };
        console.log(user);
        this.userservice.addUser(user).subscribe(res=> {
            console.log(res);
            this.router.navigateByUrl('/profileEdit',{state : {
                User : res,
                listOfUserName : this.result
            }});
        });
    }
}
