import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api.service';
import { Character } from '../../../../models/character/character.model';

@Component({
  selector: 'app-user-characters-card',
  imports: [],
  templateUrl: './user-characters-card.html',
  styleUrl: './user-characters-card.scss',
})
export class UserCharactersCard implements OnInit {
  characters: Character[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log('UserCharactersCard INIT');

    this.api
      .get<Character[]>('UserCharacters', 'get-user-characters', {
        userId: '5e45fdf0-ba32-4314-9d0c-88cda09191ee',
      })
      .subscribe({
        next: (res) => {
          console.log('UserCharactersCard RESULT:', res);
          this.characters = res;
        },
        error: (err) => {
          console.error('Erro ao buscar personagens: ', err);
        },
      });
  }
}
