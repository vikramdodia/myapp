import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-updateuser',
	templateUrl: './updateuser.component.html',
	styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
	id: any;
	user: any = {
		 name:"", phone:"", email:"", _id:""
	} ;
	userid : any;
	constructor(private _activeRoute: ActivatedRoute, public _userservice: UserService) { 
			this.id = this._activeRoute.snapshot.paramMap.get('id');
			console.log("Id to update user",this.id);

			this._userservice.getUserById(this.id).subscribe((user:any)=>{
				console.log('Observable userdata',user);
				this.user = user;
			})

		
	}
	ngOnInit() {

	}
	updateUserData(user){
		console.log("Users Updated Data", user);
		 this._userservice.updateUser(user);
	}

}
