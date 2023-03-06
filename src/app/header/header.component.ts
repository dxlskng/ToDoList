import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  interval$!:Observable<string>
ngOnInit(): void {
   this.interval$=interval(1000).pipe(
    map(value => value %2===0 ? 
      `${value} pair`:
      ` ${value} impair`)
   );
}
}
