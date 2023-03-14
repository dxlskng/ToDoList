import {Injectable} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {taskcomposition} from "../models/taskcomposition.model";

@Injectable({
  providedIn:'root'
})
export class taskService{
taskList :taskcomposition[]=[
];
  addlist(form:FormGroup)
{
  let titl!:string;
  this.taskList.push({
    tasktitle:form.value.Titre,
    description:form.value.Description,
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
