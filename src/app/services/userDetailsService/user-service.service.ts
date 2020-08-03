import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class UserServiceService {
	constructor(public http: HttpClient, private router: Router) { }

	addUser(user: any) {
		console.log('user');
		return this.http.post('http://localhost:8080/users/addUsers', user, {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		});
	}
	getUsers() {
		return this.http.get('http://localhost:8080/users/getUsers');
	}

	updateUsers(user:any) {
		console.log(user);
		return this.http.post('http://localhost:8080/users/updateUsers', user, {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		});
	}

	uploadImage (img:any){
		return this.http.post('http://localhost:8080/users/uploadImage', img);
	}

	retrieveImage(imgId:any){
		return this.http.get('http://localhost:8080/users/getUsers/'+imgId);
	}

	authenticate(userId, password) {
		const headers = new HttpHeaders({
			Authorization: 'Basic ' + btoa(userId + ':' + password),
		});
		return this.http
			.get('http://localhost:8080/users/validateUser', { headers })
			.pipe(
				map((data) => {
					sessionStorage.setItem('token', userId + ':' + password);
					localStorage.setItem('id', userId);
					return data;
				})
			);
	}

	isLoggedIn(bool: boolean) {
		sessionStorage.setItem('auth', String(bool));
		return bool;
	}

	authentication(userId: any, password: any) {
		throw new Error('Method not implemented.');
	}
}
