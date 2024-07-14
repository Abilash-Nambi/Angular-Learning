import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-details-list',
  templateUrl: './users-details-list.component.html',
  styleUrls: ['./users-details-list.component.scss'],
})
export class UsersDetailsListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userServices: UsersService
  ) {}
  public state: number = 0;
  public userDetails: User[] = [];
  public filteredUserData: User[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.state = +params['id'];
    });
    this.userServices.getUsers().subscribe((res) => {
      (this.userDetails = res), this.filteredData();
    });
  }

  filteredData() {
    if (this.userDetails.length > 0) {
      this.filteredUserData = this.userDetails.filter(
        (data) => data.id == this.state
      );
      console.log(
        '🚀 + UsersDetailsListComponent + filteredData +   this.filteredUserData:',
        this.filteredUserData
      );
    }
  }
}
