import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {taskcomposition} from "../models/taskcomposition.model";
import { taskService } from '../services/task.service';

@Component({
  selector: 'app-title-and-task-container',
  templateUrl: './title-and-task-container.component.html',
  styleUrls: ['./title-and-task-container.component.css']
})
export class TitleAndTaskContainerComponent implements OnInit{
 /* @Input() mytask!: taskcomposition[];*/
mytask$!:Observable<taskcomposition[]>
    constructor(public taskservice:taskService ){

    };
  ngOnInit() {
/*this.mytask =this.taskservice.taskList; */
this.mytask$=this.taskservice.displaytask()
}
}
