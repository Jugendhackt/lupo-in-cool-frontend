import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { DndDirective } from './dnd.directive';
import { SubjectTableComponent } from './subject-table/subject-table.component';
import { FooterComponent } from './footer/footer.component';
import { ModalFehlerComponent } from './modal-fehler/modal-fehler.component';
import {LupoService} from './lupo.service';
import {StorageService} from './storage.service';
import {OrderModule} from 'ngx-order-pipe';
import {FormsModule} from '@angular/forms';
import { FooterStundenColorComponent } from './footer-stunden-color/footer-stunden-color.component';
import {ErrorService} from './error.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalUploadComponent,
    DndDirective,
    SubjectTableComponent,
    FooterComponent,
    ModalFehlerComponent,
    FooterStundenColorComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule
  ],
  providers: [LupoService, StorageService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
