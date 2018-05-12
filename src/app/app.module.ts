import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { DndDirective } from './dnd.directive';
import { SubjectTableComponent } from './subject-table/subject-table.component';
import {LupoService} from "./lupo.service";
import {StorageService} from "./storage.service";
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalUploadComponent,
    DndDirective,
    SubjectTableComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [LupoService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
