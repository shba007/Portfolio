import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { HexagonComponent } from './hexagon/hexagon.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SectionComponent, HeroComponent, CardComponent, HexagonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
