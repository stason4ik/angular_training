import { Component, OnInit } from '@angular/core';
import { UserModel, UserInfo } from '../models/user-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private users: Array<UserModel>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(x=> this.users = x);
    console.log('User Container Init');
  }

  
}
