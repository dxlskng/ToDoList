import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {AddFormComponent} from "./add-form/add-form.component";
import { EndTaskComponent } from "./end-task/end-task.component";
import { LoadingTaskComponent } from "./loading-task/loading-task.component";
const route:Routes=[
  {
    path:'',
    component:TaskListComponent
  },
  {
    path:'add',
    component:AddFormComponent
  },
  {
    path:'endtask',
    component:EndTaskComponent
  },
 {
  path:'loadingTask',
  component:LoadingTaskComponent
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
