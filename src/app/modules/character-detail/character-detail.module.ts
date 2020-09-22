import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharacterDetailRoutingModule } from "./character-detail-routing.module";
import { CharacterDetailComponent } from "./character-detail.component";
import { SharesModule } from "../../shares/shares.module";

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule, SharesModule, CharacterDetailRoutingModule],
})
export class CharacterDetailModule { }
