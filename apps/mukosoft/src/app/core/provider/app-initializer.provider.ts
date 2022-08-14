import { APP_INITIALIZER } from '@angular/core';
import { AppInitializerService } from '../../features/medication/services/app-initializer-service/app-initializer.service';

export const AppInitializerFactory = (service: AppInitializerService) => {
  return () => service;
};

export const AppInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: AppInitializerFactory,
  deps: [AppInitializerService],
  multi: true,
};
