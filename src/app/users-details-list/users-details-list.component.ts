import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details-list',
  templateUrl: './users-details-list.component.html',
  styleUrls: ['./users-details-list.component.scss'],
})
export class UsersDetailsListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public state: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.state = +params['id'];
    });
  }
}
