import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';

const routes: Routes = [
{path: 'User', component: UserComponent },
{path: 'Post', component: PostComponent },
{path:'Keyboard', component: KeyboardComponent},
{path:'Alphabet', component: AlphabetComponent},
{path:'updateuser/:id', component: UpdateuserComponent},
{path:'updatepost/:id', component: UpdatepostComponent}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
