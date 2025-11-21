import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  imports: [],
  templateUrl: './settings-modal.html',
  styleUrl: './settings-modal.scss',
})
export class SettingsModal {
  @Input() position!: { top: number; right: number };
}
