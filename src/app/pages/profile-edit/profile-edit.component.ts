import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageComponent } from "../upload-image/upload-image.component";
import { UploadBackgroundImageComponent } from "../upload-background-image/upload-background-image.component";
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserServiceService } from "src/app/services/userDetailsService/user-service.service";

@Component({
  	selector: 'app-profile-edit',
  	templateUrl: './profile-edit.component.html',
  	styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
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
	listOfUsernames:any;

  	constructor(private modalService: NgbModal, private router:Router,private userservice: UserServiceService) {
		  console.log(this.router.getCurrentNavigation().extras.state.User);
		  console.log(this.router.getCurrentNavigation().extras.state.listOfUserName );

		  this.user = this.router.getCurrentNavigation().extras.state.User;
		  this.listOfUsernames = this.router.getCurrentNavigation().extras.state.listOfUserName ;
		  this.username = this.user.username;
		  this.firstname = this.user.firstname;
		  this.lastname = this.user.lastname;
		  this.email = this.user.email;
		  this.imageId = this.user.imageId;
		  this.backgroundImageId = this.user.backgroundImageId;
		  this.bio = this.user.bio;
		  this.profileType = this.user.profileType;
	}

  	ngOnInit(): void {}

  	openUploadImageModal() {
    	const modalRef = this.modalService.open(UploadImageComponent);
		modalRef.componentInstance.name = 'World';
		modalRef.result.then((result) => {
			if (result) {
				console.log(result);
				this.image = result;
				const uploadImage = new FormData();
				uploadImage.append("Image",this.image,this.image.name);
				this.userservice.uploadImage(uploadImage).subscribe((res : any)=>{
					console.log(res);
					this.imageId = res.imageId;
				})
			}
		});
  	}

  	openUploadBackgroundImageModal() {
    	const modalRef = this.modalService.open(UploadBackgroundImageComponent);
		modalRef.componentInstance.name = 'World';
		modalRef.result.then((result) => {
			if (result) 
			{
				console.log(result);
				this.backgroundImage = result;
				const uploadBackgroundImage = new FormData();
				uploadBackgroundImage.append("Image",this.backgroundImage,this.backgroundImage.name);
				this.userservice.uploadImage(uploadBackgroundImage).subscribe((res : any) =>{
					// this.backgroundImageId = res;
					console.log(res);
					this.backgroundImageId = res.imageId;
				})
			}
		});
	}

	// isUsernameUnique(event){
	// 	console.log(event.target.value);
	// 	for (let i = 0; i < this.listOfUsernames.length; i++) {
	// 		console.log(this.listOfUsernames[i].username);
    //         if (this.listOfUsernames[i].username == event.target.value) {
	// 			this.invaliduserName = true;
	// 			console.log(this.invaliduserName);
    //         }
	// 	}
	// 	this.invaliduserName = false;
	// }
	  
	onSaveChanges(){

		const user = {
			userId : this.user.userId,
            firstname : this.firstname,
            lastname : this.lastname,
            username : this.username,
            email : this.email,
            password : this.user.password,
            imageId : this.imageId,
            backgroundImage : this.backgroundImageId,
            bio : this.bio,
            profileType : this.profileType 
		};
		console.log(user);
		this.userservice.updateUsers(user).subscribe(res=> {
            console.log(res);
            this.router.navigateByUrl('/profile',{state : {User : res}});
        });
	}
}
