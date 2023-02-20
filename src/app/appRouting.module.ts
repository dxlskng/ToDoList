import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {AddFormComponent} from "./add-form/add-form.component";
const route:Routes=[
  {
    path:'',
    component:TaskListComponent
  },
  {
    path:'add',
    component:AddFormComponent
  }
];
@NgModule({
  imports:[
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
