import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ApiService } from './core/services/api.service';
import { IconService } from './core/services/icon.service';
import { loadIcons } from './core/config/load-icons';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    ApiService,
    IconService,
    provideAppInitializer(() => {
      const http = inject(HttpClient);
      const iconService = inject(IconService);

      return new Promise<void>((resolve) => {
        setTimeout(async () => {
          try {
            await loadIcons(http, iconService);
          } catch (error) {
            console.error('Erro ao carregar ícones:', error);
          } finally {
            resolve();
          }
        }, 50);
      });
    }),
  ],
};
