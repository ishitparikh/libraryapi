import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { LibraryMatModule } from '../library-mat.module';
import { CheckedOutRoutingModule } from './checked-out-routing.module';
import { PreviouslyCheckedOutBooksComponent } from './previously-checked-out-books/previously-checked-out-books.component';

@NgModule({
  declarations: [
    CheckedOutBooksComponent,
    PreviouslyCheckedOutBooksComponent
  ],
  imports: [
    CommonModule,
    CheckedOutRoutingModule,
    LibraryMatModule
  ],
  exports:[
    CheckedOutBooksComponent,
    PreviouslyCheckedOutBooksComponent
  ]
})
export class CheckedOutModule { }
