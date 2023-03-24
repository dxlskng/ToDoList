import {Injectable} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import {taskcomposition} from "../models/taskcomposition.model";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn:'root'
})
export class taskService{
  constructor(public http: HttpClient){}
taskList :taskcomposition[]=[
];
/*task$!:Observable<taskcomposition[]>*/
displaytask():Observable<taskcomposition[]>{
return this.http.get<taskcomposition[]>('http://localhost:3000/Tache')
}

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
