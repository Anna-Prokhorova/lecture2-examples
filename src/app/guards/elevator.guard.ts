import { CanActivateFn, Router } from '@angular/router';
import { BuildingService } from '../services/building-service.service';
import { inject } from '@angular/core';

export const elevatorGuard: CanActivateFn = (route, state): boolean => {
  const buildingService: BuildingService = inject(BuildingService);
  const router: Router = inject(Router);

  if (
    buildingService.user &&
    buildingService.user.color === route.routeConfig?.title
  ) {
    return true;
  }

  alert('Взрослых дома нет!');
  router.navigate(['elevator']);
  return false;
};
