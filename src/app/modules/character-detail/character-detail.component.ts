import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CharactersService } from "src/app/services/characters.service";
import { Body } from "src/app/models/body.model";
import { CharacterModel } from "src/app/models/character.model";
import { Comic } from "src/app/models/comic.model";
import { Location } from '@angular/common';

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.scss"],
})
export class CharacterDetailComponent implements OnInit {
  characterId: string;
  characterDetail: CharacterModel = new CharacterModel();
  comicsList: Comic = new Comic();

  body: Body;
  comic: Comic;

  isLoading: Boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _back: Location,
    public charactersService: CharactersService

  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.body = {
      limit: 10,
      offset: 0,
    };
    this._route.params.subscribe((params) => {
      this.characterId = params[`id`];
    });

    this.getDetail();
    this.getComics();
  }

  goBack() {
    this._back.back();
  }


  getDetail() {
    this.charactersService
      .get({ body: this.body, characterId: `/${this.characterId}` })
      .subscribe((data: any) => {
        this.characterDetail = data[`data`][`results`][0];
      });
  }

  getComics() {
    this.charactersService
      .getComics({ body: this.body, characterId: `/${this.characterId}` })
      .subscribe((data: any) => {
        this.comicsList = data[`data`][`results`];
        this.isLoading = false;
      });
  }
}
