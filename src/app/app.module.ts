import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
