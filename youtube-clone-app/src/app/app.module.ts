import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { YtcTooltipForIconDirective } from './directives/ytcTooltipForIcon';
import { AppIconComponent } from './components/utils/app-icon/app-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    YtcTooltipForIconDirective,
    AppIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
