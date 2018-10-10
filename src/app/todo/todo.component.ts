import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todoList = [];
  disableFlag: boolean = true;
  index: number = 0;
  errorMsg: string = "";
  constructor() { }

  ngOnInit() {

  }
  addTask() {
    this.index = this.index + 1;
    let obj = new Object();
    obj["id"] = this.index;
    obj["data"] = "";
    obj["disabled"] = false;
    obj["completed"] = false;
    this.todoList.push(obj);
    this.errorMsg ="";
  }
  save(index: any) {
    let data = document.getElementById(index)['value'];

    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === index) {
        if (this.todoList[i].completed == true) {
          this.errorMsg = "Task is marked completed cannot edit or save it!!"
        }
        else {
          this.errorMsg ="";
          this.todoList[i].data = data;
          this.todoList[i].disabled = true;
        }
      }
    }
  }

  edit(index: any) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === index) {
        if (this.todoList[i].completed == true) {
          this.errorMsg = "Task is marked completed canoot edit or save it!!"
        }
        else {
          this.errorMsg ="";
          this.todoList[i].disabled = false;
          document.getElementById(index).focus();
        }
      }
    }

  }
  delete(index: number) {
    this.errorMsg ="";
    this.todoList = this.todoList.filter((item) => item.id !== index);
  }

  completedTask(index: number) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === index) {
        this.todoList[i].completed = true;
        this.todoList[i].disabled = true;
        this.errorMsg ="";
      }
    }
  }
}
