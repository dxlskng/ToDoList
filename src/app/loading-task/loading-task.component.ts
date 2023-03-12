import { Component } from '@angular/core';
import { taskcomposition } from '../models/taskcomposition.model';
import { taskService } from '../services/task.service';

@Component({
  selector: 'app-loading-task',
  templateUrl: './loading-task.component.html',
  styleUrls: ['./loading-task.component.css']
})
export class LoadingTaskComponent {
  loadingTask!:taskcomposition[];
  constructor(private tasklist:taskService){
  } 
  ngOnInit(): void {
 this.loadingTask= this.tasklist.taskList; 
  }
}
