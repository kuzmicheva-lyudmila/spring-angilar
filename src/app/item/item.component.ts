import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: number;
  book: any;
  posts: any = [];

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);

    this.http.get('/api/books/' + this.id).toPromise()
      .then(response => this.book = response);

    this.http.get('/api/books/' + this.id + '/posts').toPromise()
      .then(response => this.posts = response);
  }
}
