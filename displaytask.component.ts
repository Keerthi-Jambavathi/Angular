import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {
  taskname=" ";
  tasklist=[''];
  constructor() { }

  ngOnInit() {
  }
  addtask(){
    this.tasklist.push(this.taskname);
    this.taskname="";
  }
}
