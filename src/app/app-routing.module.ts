import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import {ItemComponent} from './item/item.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books'},
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: ItemComponent },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
