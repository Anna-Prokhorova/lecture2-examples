import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Environment } from 'src/environments/environment.model';

@Component({
  selector: 'app-blue-room',
  standalone: true,
  templateUrl: './blue-room.component.html',
  styleUrls: ['./blue-room.component.less'],
})
export class BlueRoomComponent implements OnInit, OnDestroy {
  private httpClient: HttpClient = inject(HttpClient);
  private subscription!: Subscription;

  ngOnInit(): void {
    //должно быть в сервисе, но мне лень
    //делаем запрос к моковому бэкенду (см. папку lecture2-mock-api), подписываемся на поток, по подписке выводим данные в консоль
    this.subscription = this.httpClient
      .get(`${environment.backendOrigin}/blue`)
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    //отписываемся от потока, чтобы избежать утечек памяти
    this.subscription.unsubscribe();
  }
}
