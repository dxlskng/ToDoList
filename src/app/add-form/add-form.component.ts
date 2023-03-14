import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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
    Titre:[null],
    Description:[null]
  }
);
  }
}
