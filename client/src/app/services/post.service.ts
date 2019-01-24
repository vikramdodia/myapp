import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	foundPost: Subject<any>;
	post: Subject<any>;

	constructor(public http:HttpClient) { 
		this.post = <Subject<any>>new Subject();
		this.foundPost = <Subject<any>>new Subject()
	}
	getPostObs(){
		return this.post.asObservable();
	}
	getPostByIdObs(){
		return this.foundPost.asObservable();
	}

	addData(details){
		console.log("Details is displayes of post", details);
		return this.http.post("http://localhost:3000/post",details);
	}

	getPost(){
		this.http.get("http://localhost:3000/post")
		.subscribe((res: any) =>{
			console.log("Response......",res);
			this.post.next({
				data: res
			});
			console.log("Response of post in service",res);
		},
		err=>{
			console.log("ERR", err);
		});
	}

	getPostById(id){
		console.log("Getting post with id = ",id);
		return this.http.get("http://localhost:3000/post/"+ id);
	}
	updatePost(postid){
		this.http.put("http://localhost:3000/post",postid)
		.subscribe(res=>{
			console.log("UpdatedPost", res);
		},err => {
			console.log(err);
		});

	}
	deletePostById(id){
		return this.http.delete("http://localhost:3000/post/"+ id);
	}
}