import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { DndDirective } from './dnd.directive';
import { SubjectTableComponent } from './subject-table/subject-table.component';
import {LupoService} from "./lupo.service";
import {StorageService} from "./storage.service";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  declarations: [
    AppComponent,
    ModalUploadComponent,
    DndDirective,
    SubjectTableComponent
  ],
  imports: [
    BrowserModule,
    OrderModule
  ],
  providers: [LupoService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
