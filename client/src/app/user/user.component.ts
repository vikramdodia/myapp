import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	constructor(public _userservice: UserService, private _router: Router) { }
	details = {
		name: "", 
		phone: "",
		email: ""
	};
	users: any;
	ngOnInit(){
		this._userservice.getUser();
		this._userservice.getObs().subscribe(data=>{
			console.log("In Observable variable", data);
			this.users = data.data;
		})
	}

	dataroute(id){
		this._router.navigate(['/updateuser', id])
	}

	deleteUser(id,index){
		console.log("Deleting user", id)
		this._userservice.deleteUserById(id).subscribe(res=>{
			console.log("User Deleted")
			this.users.splice(index,1);
		},err=>{
			console.error(err);
		})
	}
	addData(details){
		//console.log("This is details", details);
		this._userservice.addData(details).subscribe(res=>{
			console.log("RESPON FROM API ", res);
			this.getUser();
		}, err=>{
			console.log("ERR from API", err);
		})
	}
	getUser(){
		this._userservice.getUser();
		console.log("Response from component", this.users)
	}
}