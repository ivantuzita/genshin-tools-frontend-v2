import { IconService } from './../../../core/services/icon.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private iconService = inject(IconService);

  paimonIcon: SafeHtml | null = null;
  accountIcon: SafeHtml | null = null;
  iconsLoaded = false;

  ngOnInit() {
    this.loadIcons();
    
    setTimeout(() => this.loadIcons(), 1000);
  }

  private loadIcons() {
    const paimonIcon = this.iconService.getIcon('navbar/navbar-paimon');
    const accountIcon = this.iconService.getIcon('navbar/navbar-account');
    if (paimonIcon && accountIcon) {
      this.paimonIcon = paimonIcon;
      this.accountIcon = accountIcon;
      this.iconsLoaded = true;
    }
  }
}
