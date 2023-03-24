import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {taskService} from "../services/task.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
constructor(private formbuilder: FormBuilder,public addTask:taskService){}
formulaire!:FormGroup;
/**makesuggestion!:Observable**/
  ngOnInit() {
this.formulaire= this.formbuilder.group(
  {
    Titre:[null, Validators.required],
    Description:[null, Validators.required]
  }
);
  }
}
