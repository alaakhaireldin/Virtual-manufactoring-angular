import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ProjectService } from './projects.service';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateProjectComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
