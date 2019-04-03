import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: LoginComponent},
  { path: 'register', component: SignupComponent },
  { path: 'home', component: HomeComponent},
  { path: 'userProfile', component: UserProfileComponent},
  { path: 'repositories', component: RepositoriesComponent},
  {path: '', component: PostListComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent},
  {path: 'AddRepository', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
