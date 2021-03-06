import { Component, OnInit, Input } from '@angular/core';
import { UserInfo, UserModel } from '../../models/user-model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() users: Array<UserModel>;
private userToEdit : UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
 
  addUser(){
    this.userToEdit = new UserModel(0, null, '',new UserInfo('','','','',''));
  }

  editUser(userId: number){
    this.userService.getUser(userId)
      .subscribe(u=> this.userToEdit = u);
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId)
      .subscribe(()=> {
        console.log('user deleted!');
        let userIndex = this.users.findIndex(x=> x.id == userId);
        this.users.splice(userIndex, 1);
      });
  }

  onUserSaved(user: UserModel){
    let userIndex = this.users.findIndex(x=> x.id == user.id);
    if(userIndex>0)
      this.userService.updateUser(user)
        .subscribe(u =>{
          debugger;
          let userIndex = this.users.findIndex(x=> x.id == u.id);
          this.users[userIndex] = u;
        } 
      );
    else
        this.userService.createUser(user)
        .subscribe(u=>this.users.push(u);
    console.log('user updated!');
  }
}
