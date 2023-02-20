import {Component, Input,OnInit} from '@angular/core';
import {taskcomposition} from "./models/taskcomposition.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'todolist';
 ngOnInit() {

 }

}
