import {Injectable} from "@angular/core";
import {taskcomposition} from "../models/taskcomposition.model";

@Injectable({
  providedIn:'root'
})
export class taskService{
taskList :taskcomposition[]=[
  {
    tasktitle:'Aller à l\'ecole',
    description:'faire les TD au school',
    startDate:new Date()
  },{
    tasktitle:'BOSSER ANGULAR',
    description: 'priority:50',
    startDate:new Date()
  }
];
  addlist(title:string ,escription:string)
{
  let titl!:string;
  this.taskList.push({
    tasktitle:title,
    description:escription,
    startDate:new Date()
  })
}
}
