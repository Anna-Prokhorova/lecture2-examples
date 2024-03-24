import { Component, inject } from '@angular/core';
import { BuildingService } from '../services/building-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  standalone: true,
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.less'],
})
export class HallComponent {
  private buildingService: BuildingService = inject(BuildingService);
  private router: Router = inject(Router);

  public login(key: string) {
    this.buildingService.login(key).subscribe((user: User | null) => {
      console.log(user);
      if (user) {
        this.router.navigate(['elevator']);
      }
    });
  }
}
