import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FollowerComponent } from './follower/follower.component';

const routes: Routes = [
  {path: '', redirectTo: '',pathMatch:'full' },
  {path: 'users',component: UsersComponent,},
  {path: 'usersDetails',component: UserDetailsComponent},
  {path: 'follower',component: FollowerComponent}
  
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
