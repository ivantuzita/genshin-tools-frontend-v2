import { Component, Input, inject } from '@angular/core';
import { IconService } from '../../../../../core/services/icon/icon.service';
import { SafeHtml } from '@angular/platform-browser';
import {
  LANGUAGE_OPTIONS,
  LanguageOption,
} from '../../../../../core/constants/i18n/languages.const';

@Component({
  selector: 'app-settings-modal',
  imports: [],
  templateUrl: './settings-modal.html',
  styleUrl: './settings-modal.scss',
})
export class SettingsModal {
  private iconService = inject(IconService);
  @Input() position!: { top: number; right: number };
  languages = LANGUAGE_OPTIONS;
  selectedLanguage: LanguageOption | null = null;
  hiddenDropdown = false;
  dropdownState = 'hidden';
  iconsLoaded = false;

  ngOnInit() {
    this.loadIcons();
  }

  onDropdownClick() {
    this.hiddenDropdown ? (this.dropdownState = '') : (this.dropdownState = 'hidden');
    this.hiddenDropdown = !this.hiddenDropdown;
  }

  onLanguageChange(languageOption: LanguageOption) {
    this.selectedLanguage = languageOption;

    //call languageService
    this.dropdownState = 'hidden';
  }

  private loadIcons() {
    for (var language of this.languages) {
      language.iconHtml = this.iconService.getIcon(language.iconLabel);
    }
    this.iconsLoaded = true;
  }
}