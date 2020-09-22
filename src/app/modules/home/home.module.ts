import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";

import { CharactersService } from "src/app/services/characters.service";
import { SharesModule } from "../../shares/shares.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharesModule],
  providers: [CharactersService],
})
export class HomeModule {}
