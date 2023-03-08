import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, tap} from 'rxjs';
import { taskService } from '../services/task.service';
@Component({
  selector: 'app-end-task',
  templateUrl: './end-task.component.html',
  styleUrls: ['./end-task.component.css']
})
export class EndTaskComponent implements OnInit {
  nomtache!:string;
  conclusion!:string;
  constructor(public tasklist:taskService){
  } 
  ngOnInit(): void {
    this.nomtache="Moussa"
interval(1000).pipe(
  tap(
    console.log
  )
).subscribe();
  }
boutonEnvoi():void{
 console.log(this.nomtache);

}
  
}