import { Component, OnInit } from "@angular/core";
import { CharactersService } from "src/app/services/characters.service";

import { CharacterModel } from "src/app/models/character.model";
import { Body } from "src/app/models/body.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  characters: CharacterModel[] = [];
  crescent: boolean = true;
  filtered: boolean = false;
  isLoading: boolean = true;

  total: number;
  size: number = 10;
  body: Body;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.body = {
      orderBy: "name",
      limit: 10,
      offset: 0,
    };

    this.loadCharacters();
  }

  loadCharacters() {
    this.isLoading = true;
    this.charactersService
      .get({ body: this.body, characterId: "" })
      .subscribe((data: any) => {
        this.characters = data[`data`][`results`];
        this.total = data[`data`][`total`];
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }

  searching(event) {
    let searchTerm = event.target.value;
    if (searchTerm.length >= 3 && !this.filtered) {
      this.isLoading = true;
      this.filtered = true;
      this.body.nameStartsWith = searchTerm;
      this.charactersService
        .get({ body: this.body, characterId: "" })
        .subscribe((data: any) => {
          this.characters = data[`data`][`results`];
          this.total = data[`data`][`total`];
          this.size = this.total;
          setTimeout(() => {
            this.isLoading = false;
          }, 1100);
        });
    } else if (searchTerm.length < 3 && this.filtered) {
      this.filtered = false;
      this.body.nameStartsWith = null;
      this.loadCharacters();
    }
  }

  reorder() {
    this.crescent = !this.crescent;
    this.crescent
      ? (this.body[`orderBy`] = "name")
      : (this.body[`orderBy`] = "-name");
    this.loadCharacters();
  }

  nextPage() {
    this.body.offset = this.body.offset + 10;
    this.size = this.size + 10;
    this.loadCharacters();
  }

  prevPage() {
    this.body.offset = this.body.offset - 10;
    this.size = this.size - 10;
    this.loadCharacters();
  }

  clearSearch() {
    this.filtered = false;
    this.size = 10;
    this.body.nameStartsWith = null;
    this.loadCharacters();
  }
}
