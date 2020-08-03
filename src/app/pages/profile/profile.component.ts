import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userDetailsService/user-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    focus: any;
	focus1: any;
	username : String;
	firstname : String;
	lastname : String;
	email : String;
	image : File;
	imageId : String
	backgroundImage : File;
	backgroundImageId : String;
	bio : String;
	profileType : boolean;
	user : any; 

    constructor(private router:Router,private userservice: UserServiceService) {

        this.user = this.router.getCurrentNavigation().extras.state.User;
        this.username = this.user.username;
        this.firstname = this.user.firstname;
        this.lastname = this.user.lastname;
        this.email = this.user.email;
        this.imageId = this.user.imageId;
        this.backgroundImageId = this.user.backgroundImageId;
        this.bio = this.user.bio;
        this.profileType = this.user.profileType;
          
    }

    ngOnInit() {}

}
