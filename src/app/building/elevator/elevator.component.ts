import { Component, OnInit, inject } from '@angular/core';
import { BuildingService } from '../services/building-service.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elevator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.less'],
})
export class ElevatorComponent implements OnInit {
  private buildingService: BuildingService = inject(BuildingService);
  public user: User | null = null;

  ngOnInit(): void {
    this.user = this.buildingService.user;
  }
}
