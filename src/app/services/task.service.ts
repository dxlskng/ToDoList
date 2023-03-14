import {Injectable} from "@angular/core";
import { NgForm } from "@angular/forms";
import {taskcomposition} from "../models/taskcomposition.model";

@Injectable({
  providedIn:'root'
})
export class taskService{
taskList :taskcomposition[]=[
];
  addlist(form:NgForm)
{
  let titl!:string;
  this.taskList.push({
    tasktitle:form.value.titre,
    description:form.value.description,
    startDate:new Date(),
    finis:false,
    id:Math.random()*100
  })

};
finirTache(id:number):void{
  alert("Tache Terminée: Félicitation");
for (let i = 0; i < this.taskList.length; i++) {
  if(this.taskList[i].id===id) {
    this.taskList[i].finis=true;
  } 
}
}
}
