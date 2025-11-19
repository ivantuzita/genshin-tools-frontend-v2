import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IconService } from '../services/icon.service';

export function loadIcons(http: HttpClient, iconService: IconService): Promise<void[]> {

  const iconsToLoad = ['navbar/navbar-paimon', 'navbar/navbar-account'];

  const requests = iconsToLoad.map(async (name) => {
    try {
      const svgContent = await firstValueFrom(
        http.get(`assets/icons/${name}.svg`, { responseType: 'text' })
      );

      if (svgContent) {
        iconService.registerIcon(name, svgContent);
      } else {
        console.warn(`Ícone "${name}" veio vazio do servidor`);
        iconService.registerIcon(name, '');
      }
    } catch (error) {
      console.error(`Erro ao carregar ícone "${name}":`, error);
      iconService.registerIcon(name, '');
    }
  });

  return Promise.all(requests);
}
