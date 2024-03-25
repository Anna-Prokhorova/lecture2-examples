import { Component, OnDestroy, inject } from '@angular/core';
import { BuildingService } from '../../services/building-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hall',
  standalone: true,
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.less'],
})
export class HallComponent implements OnDestroy {
  private buildingService: BuildingService = inject(BuildingService);
  private router: Router = inject(Router);
  private subscription: Subscription | null = null;

  public login(key: string): void {
    //сервис вернул поток, на который подписываемся
    this.buildingService.login(key).subscribe((user: User | null) => {
      console.log(user);
      if (user) {
        this.router.navigate(['elevator']);
      }
    });
  }

  ngOnDestroy(): void {
    //отписываемся от потока, чтобы избежать утечек памяти
    if (this.subscription) this.subscription.unsubscribe();
  }
}
