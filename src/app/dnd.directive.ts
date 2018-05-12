import {Directive, HostBinding, HostListener} from '@angular/core';
import {LupoService} from "./lupo.service";

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('class') private classes = "";

  constructor(private lupoService: LupoService) { }

  @HostListener('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
      this.classes = "drag-over";
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.classes = "";
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length === 1){
      this.lupoService.convertLupoFile(files[0]);
    }
    this.classes = "";
  }
}
