import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	constructor(public _postService: PostService, private _router: Router) {}
	details = {
		lastname: ""
	};
	posts: any;

	ngOnInit() {
	this._postService.getPost();
	this._postService.getPostObs().subscribe(data=>{
		console.log("In Observable variable", data);
		this.posts = data.data;
	})
	}
	updatePostEdit(id){
		this._router.navigate(['/updatepost', id])
	}

	deletePost(id,index){
		console.log("Deleting user", id)
		this._postService.deletePostById(id).subscribe(res=>{
			console.log("User Deleted")
			this.posts.splice(index,1);
		},err=>{
			console.error(err);
		})
	}
	addData(details){
		//console.log("This is details", details);
		this._postService.addData(details).subscribe(res=>{
			console.log("RESPON FROM API ", res);
			this.getPost();
		}, err=>{
			console.log("ERR from API", err);
		})
	}
	getPost(){
		this._postService.getPost();
		console.log("Response from component", this.posts)
	}
}
