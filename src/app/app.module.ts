import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { Routes, RouterModule } from '@angular/router';
import { ArrayManipulationComponent } from './array-manipulation/array-manipulation.component';
const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'array-manipulation', component: ArrayManipulationComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ArrayManipulationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
