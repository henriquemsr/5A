import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { HeaderComponent } from "./shares/header/header.component";
import { SharesModule } from "./shares/shares.module";
import { FooterComponent } from "./shares/footer/footer.component";
import { HelperService } from "./services/helper.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharesModule,
  ],
  providers: [ApiService, HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
