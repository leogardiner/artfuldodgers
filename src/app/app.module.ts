import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { gateway as MoltinGateway } from '@moltin/sdk';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { StoreComponent }  from './components/store.component';
import { MoltinService } from './services/moltin.service';
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, StoreComponent ],
  providers:    [ MoltinService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
