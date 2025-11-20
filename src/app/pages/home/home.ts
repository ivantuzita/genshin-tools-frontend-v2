import { Component } from '@angular/core';
import { UserCharactersCard } from './components/user-characters-card/user-characters-card';
import { DailyMaterialsCard } from './components/daily-materials-card/daily-materials-card';
import { UserWeaponsCard } from './components/user-weapons-card/user-weapons-card';

@Component({
  selector: 'app-home',
  imports: [DailyMaterialsCard, UserCharactersCard, UserWeaponsCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}