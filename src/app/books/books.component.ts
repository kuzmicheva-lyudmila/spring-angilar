import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/books').toPromise()
      .then(response => this.books = response);
  }
}
