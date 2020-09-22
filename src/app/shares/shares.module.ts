import { NgModule } from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { CharacterCardComponent } from "./character-card/character-card.component";
import { CardsLoadingComponent } from "./cards-loading/cards-loading.component";
import { CharacterNotfoundComponent } from "./character-notfound/character-notfound.component";
import { ComicCardComponent } from "./comic-card/comic-card.component";

@NgModule({
  declarations: [
    CharacterCardComponent,
    CardsLoadingComponent,
    CharacterNotfoundComponent,
    ComicCardComponent,
  ],
  exports: [
    CharacterCardComponent,
    CardsLoadingComponent,
    CharacterNotfoundComponent,
    ComicCardComponent,
  ],
  imports: [NgxSkeletonLoaderModule],
})
export class SharesModule {}
