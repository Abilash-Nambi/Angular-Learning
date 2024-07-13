import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(private userServices: UsersService) {}
  public user: User[] = [];

  ngOnInit(): void {
    this.userServices.getUsers().subscribe((res) => (this.user = res));
  }
}
