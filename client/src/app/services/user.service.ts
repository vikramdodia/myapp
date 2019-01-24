import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class UserService {
	
	foundUser: Subject<any>;
	user: Subject<any>;

	constructor(public http:HttpClient) { 

		this.user = <Subject<any>>new Subject();
		this.foundUser = <Subject<any>>new Subject();
	}

	getObs(){
		return this.user.asObservable();
	}

	getUserByIdObs(){
		return this.foundUser.asObservable();
	}

	addData(details){
		console.log("Details is displayes of user", details);
		return this.http.post("http://localhost:3000/user",details);
	}

	getUser(){
		this.http.get("http://localhost:3000/user")
		.subscribe((res: any) =>{
			console.log("Response......",res);
			this.user.next({
				data: res
			});
			//console.log("Response of user in service", this.user);
		},
		err=>{
			console.log("ERR", err);
		})
	}

	getUserById(id){
		console.log("Getting user with id = ",id);
		return this.http.get("http://localhost:3000/user/"+ id);
	}

	updateUser(userid){
		this.http.put("http://localhost:3000/user",userid)
		.subscribe(res=>{
			console.log("UpdatedUser", res);
		},err => {
		console.log(err);
	});

	}
	deleteUserById(id){
		return this.http.delete("http://localhost:3000/user/"+ id);
	}
}