import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  constructor(
    private readonly route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
  }
}
