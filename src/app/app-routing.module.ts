import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueRoomComponent } from './rooms/blue-room/blue-room.component';
import { GreenRoomComponent } from './rooms/green-room/green-room.component';
import { ElevatorComponent } from './building/elevator/elevator.component';
import { HallComponent } from './building/hall/hall.component';
import { elevatorGuard } from './guards/elevator.guard';
import { NoRoomComponent } from './rooms/no-room/no-room.component';

const routes: Routes = [
  {
    path: 'elevator',
    component: ElevatorComponent,
    children: [
      {
        path: 'green',
        title: 'green',
        canActivate: [elevatorGuard],
        component: GreenRoomComponent,
      },
      {
        path: 'blue',
        title: 'blue',
        canActivate: [elevatorGuard],
        component: BlueRoomComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: NoRoomComponent,
      },
    ],
  },
  {
    path: 'hall',
    component: HallComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hall',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
