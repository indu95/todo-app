import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-manipulation',
  templateUrl: './array-manipulation.component.html',
  styleUrls: ['./array-manipulation.component.css']
})
export class ArrayManipulationComponent implements OnInit {

  associativeArr = [];
  groupedArr = {};
  flag: boolean = false;
  error: string="";
  constructor() { }

  ngOnInit() {
    let obj1 = new Object;
    obj1["fileName"] = "input.txt";
    obj1["owner"] = "randy";
    this.associativeArr.push(obj1);

    let obj2 = new Object;
    obj2["fileName"] = "output.txt";
    obj2["owner"] = "randy";
    this.associativeArr.push(obj2);

    let obj3 = new Object;
    obj3["fileName"] = "code.py";
    obj3["owner"] = "stan";
    this.associativeArr.push(obj3);
  }
  groupByOwner() {
    this.groupedArr = this.associativeArr.reduce(function (acc, item) {
      let key = item.owner;
      acc[key] = acc[key] || [];
      acc[key].push(item.fileName);
      return acc;
    }, {});
    this.flag = true;
  }
  addData() {
    let filename = document.getElementById("fileName")['value'];
    let owner = document.getElementById("owner")['value'];
    if (filename == "" || owner == "") {
      this.error = "Filename and owner cannot be empty!!"
    }else{
      this.error="";
      let obj2 = new Object;
      obj2["fileName"] = filename;
      obj2["owner"] =owner;
      this.associativeArr.push(obj2);

    }
  }

}
