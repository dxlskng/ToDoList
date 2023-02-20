import {Component, OnInit} from '@angular/core';
import {taskService} from "../services/task.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  constructor(public addTask:taskService) {
  }
  titre!:string;
  descrit!:string;
  ngOnInit() {

  }
}
