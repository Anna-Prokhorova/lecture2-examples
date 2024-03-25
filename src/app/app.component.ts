import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('Init AppComponent');

    //создаем свой поток данных
    const observable: Observable<number> = new Observable((observer) => {
      // observer.error(new Error('MyError'));
      observer.next(1);
      observer.next(2);
      observer.complete();
    });

    //создаем обработчик потока, который показывает как реагируем на события в потоке
    const observer: Observer<number> = {
      next: (value: number) => console.log(value),
      error: (error: Error) => console.error(error),
      complete: () => console.log('completed'),
    };

    //подписываемся на поток и входным параметром отдаем наблюдателя
    observable.subscribe(observer);
  }
}
