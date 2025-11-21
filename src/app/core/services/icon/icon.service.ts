import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {

  constructor(private sanitizer: DomSanitizer) {}
  
  private icons = new Map<string, SafeHtml>();

  registerIcon(name: string, svgContent: string) {
    const safeSvg = this.sanitizer.bypassSecurityTrustHtml(svgContent);
    this.icons.set(name, safeSvg);
  }

  getIcon(name: string): SafeHtml | undefined {
    return this.icons.get(name);
  }
}