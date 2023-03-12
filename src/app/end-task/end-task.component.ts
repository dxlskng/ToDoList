import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, tap} from 'rxjs';
import { taskcomposition } from '../models/taskcomposition.model';
import { taskService } from '../services/task.service';
@Component({
  selector: 'app-end-task',
  templateUrl: './end-task.component.html',
  styleUrls: ['./end-task.component.css']
})
export class EndTaskComponent implements OnInit {
  endTask!:taskcomposition[];
  constructor(private tasklist:taskService){
  } 
  ngOnInit(): void {
 this.endTask= this.tasklist.taskList; 
  }
  
}