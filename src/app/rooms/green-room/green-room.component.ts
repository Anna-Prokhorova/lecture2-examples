import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-green-room',
  standalone: true,
  templateUrl: './green-room.component.html',
  styleUrls: ['./green-room.component.less'],
})
export class GreenRoomComponent implements OnInit, OnDestroy {
  private httpClient: HttpClient = inject(HttpClient);
  private subscription!: Subscription;
  ngOnInit(): void {
    //должно быть в сервисе, но мне лень
    //делаем запрос к моковому бэкенду (см. папку lecture2-mock-api), подписываемся на поток, по подписке выводим данные в консоль
    this.subscription = this.httpClient
      .get(`${environment.backendOrigin}/green`)
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    //отписываемся от потока, чтобы избежать утечек памяти
    this.subscription.unsubscribe();
  }
}
