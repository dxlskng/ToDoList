import {Injectable} from "@angular/core";
import {taskcomposition} from "../models/taskcomposition.model";

@Injectable({
  providedIn:'root'
})
export class taskService{
taskList :taskcomposition[]=[
];
  addlist(title:string ,escription:string)
{
  let titl!:string;
  this.taskList.push({
    tasktitle:title,
    description:escription,
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
