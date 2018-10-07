import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() private currentUser : UserModel;
  @Output() onChange = new EventEmitter<UserModel>();
  constructor() { }

  ngOnInit() {
  }

  saveUser(){
    // let userIndex = this.users.findIndex(x=> x.id == this.currentUser.id);
    // let user = new UserModel(this.currentUser.id, this.currentUser.userName, this.currentUser.email, new UserInfo(
    //   this.currentUser.info.firstName, this.currentUser.info.lastName, this.currentUser.info.jobTitle, this.currentUser.info.avatar, this.currentUser.info.phoneNumber
    // ));
    this.onChange.emit(this.currentUser);
    this.currentUser = null;
  }

  cancelEdit(){
    this.currentUser = null;
  }
}
