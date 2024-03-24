import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-green-room',
  standalone: true,
  templateUrl: './green-room.component.html',
  styleUrls: ['./green-room.component.less'],
})
export class GreenRoomComponent implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  ngOnInit(): void {
    this.httpClient
      .get(`${environment.backendOrigin}/green`)
      .subscribe(console.log);
  }
}
