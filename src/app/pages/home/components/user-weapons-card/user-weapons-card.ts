import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../../models/weapon/weapon.model';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-user-weapons-card',
  imports: [],
  templateUrl: './user-weapons-card.html',
  styleUrl: './user-weapons-card.scss',
})
export class UserWeaponsCard implements OnInit {
  weapons: Weapon[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get<Weapon[]>(
        'UserWeapons',
        `get-user-weapons?userId=${'5e45fdf0-ba32-4314-9d0c-88cda09191ee'}`
      ) //change for userId
      .subscribe({
        next: (res) => (this.weapons = res),
        error: (err) => console.error('Erro ao buscar armas: ', err),
      });
  }
}
