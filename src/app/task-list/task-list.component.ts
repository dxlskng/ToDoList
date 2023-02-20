import { Component,OnInit } from '@angular/core';
import {taskcomposition} from "../models/taskcomposition.model";
import {taskService} from "../services/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
tasklist!:taskcomposition[];
  constructor(private tasklis:taskService) {
  }
ngOnInit() {
    this.tasklist=this.tasklis.taskList;
}
}
