import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { DndDirective } from './dnd.directive';
import { SubjectTableComponent } from './subject-table/subject-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalUploadComponent,
    DndDirective,
    SubjectTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
