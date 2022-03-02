import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  limit = 10;
  constructor(
    private userService :UserService
  ) { }
  
  ngOnInit() {
    this.userService.getUsers(this.limit).subscribe(res => {
      if (res.data) {
        this.users = res.data;
      }
    });
  }
  getUser(id:any){
  let data = id;
  };
  loadUser(){
    this.limit = this.limit + 10;
    this.userService.getUsers(this.limit).subscribe(res => {
      if (res.data) {
        this.users = res.data;
      }
    });
  }
}
