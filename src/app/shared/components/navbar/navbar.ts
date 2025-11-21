import { IconService } from '../../../core/services/icon/icon.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SettingsModal } from './components/settings-modal/settings-modal';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, SettingsModal],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private iconService = inject(IconService);
  settingsModal = false;
  modalCoords: { top: number; right: number } = { top: 0, right: 0 };

  paimonIcon: SafeHtml | null = null;
  accountIcon: SafeHtml | null = null;
  gearIcon: SafeHtml | null = null;
  iconsLoaded = false;

  ngOnInit() {
    this.loadIcons();

    setTimeout(() => this.loadIcons(), 1000);
  }

  private loadIcons() {
    const paimonIcon = this.iconService.getIcon('navbar/navbar-paimon');
    const accountIcon = this.iconService.getIcon('navbar/navbar-account');
    const gearIcon = this.iconService.getIcon('navbar/navbar-gear');
    if (paimonIcon && accountIcon && gearIcon) {
      this.paimonIcon = paimonIcon;
      this.accountIcon = accountIcon;
      this.gearIcon = gearIcon;
      this.iconsLoaded = true;
    }
  }

  private showSettingsModal() {
    this.settingsModal = !this.settingsModal;
  }

  openSettings(btn: HTMLElement) {
    const rect = btn.getBoundingClientRect();
    console.log(rect);
    this.modalCoords = {
      top: rect.bottom + 5,
      right: window.innerWidth - rect.right,
    };
    this.showSettingsModal();
  }
}
