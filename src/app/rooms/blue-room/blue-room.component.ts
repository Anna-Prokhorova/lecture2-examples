import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blue-room',
  standalone: true,
  templateUrl: './blue-room.component.html',
  styleUrls: ['./blue-room.component.less'],
})
export class BlueRoomComponent implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  ngOnInit(): void {
    this.httpClient
      .get(`${environment.backendOrigin}/blue`)
      .subscribe(console.log);
  }
}
