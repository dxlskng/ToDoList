import {Component, Input, OnInit} from '@angular/core';
import {taskcomposition} from "../models/taskcomposition.model";

@Component({
  selector: 'app-title-and-task-container',
  templateUrl: './title-and-task-container.component.html',
  styleUrls: ['./title-and-task-container.component.css']
})
export class TitleAndTaskContainerComponent implements OnInit{
  @Input() mytask!: taskcomposition;

  ngOnInit() {
    // this.mytask = new taskcomposition(
    //   'Laver Habit',
    //   'C\'est obligé vu que tous mes habits sont sales',
    //   new Date()
    // )
}
}
