import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('Init');

    const observable = new Observable((observer) => {
      observer.error(new Error('MyError'));
      observer.next(1);
      observer.next(2);
      observer.complete();
    });

    const observer: Observer<unknown> = {
      next: (value: unknown) => console.log(value),
      error: (error: Error) => console.error(error),
      complete: () => console.log('completed'),
    };

    observable.subscribe(observer);
  }
}
