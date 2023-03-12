import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleAndTaskContainerComponent } from './title-and-task-container/title-and-task-container.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import {AppRoutingModule} from "./appRouting.module";
import { AddFormComponent } from './add-form/add-form.component';
import {FormsModule} from "@angular/forms";
import { EndTaskComponent } from './end-task/end-task.component';
import { LoadingTaskComponent } from './loading-task/loading-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleAndTaskContainerComponent,
    AddTaskComponent,
    TaskListComponent,
    AddFormComponent,
    EndTaskComponent,
    LoadingTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
