import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {taskService} from "../services/task.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
constructor(private formbuilder: FormBuilder,public addTask:taskService){}
formulaire!:FormGroup;
  ngOnInit() {
this.formulaire= this.formbuilder.group(
  {
    Titre:[null],
    Description:[null]
  }
);
  }
}
