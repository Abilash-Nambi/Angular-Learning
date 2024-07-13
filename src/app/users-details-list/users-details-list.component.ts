import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details-list',
  templateUrl: './users-details-list.component.html',
  styleUrls: ['./users-details-list.component.scss'],
})
export class UsersDetailsListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  state: number = 0;

  ngOnInit(): void {
    const id = this.route.snapshot.data['id'];
    console.log('🚀 + UsersDetailsListComponent + ngOnInit + this.state:', id);
  }
}
