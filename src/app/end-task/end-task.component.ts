import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';
@Component({
  selector: 'app-end-task',
  templateUrl: './end-task.component.html',
  styleUrls: ['./end-task.component.css']
})
export class EndTaskComponent implements OnInit, OnDestroy{
  destroy$!:Subject<boolean>
  ngOnInit(): void {
    this.destroy$=new Subject<boolean>();
      interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
      ).subscribe();
  }
ngOnDestroy(): void {
  this.destroy$.next(true);
    
}
}