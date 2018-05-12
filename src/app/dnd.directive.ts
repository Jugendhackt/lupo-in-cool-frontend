import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {LupoService} from './lupo.service';
import {ABPDatabase} from "./abp/abpdatabase";

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Input() appDnd: string;

  private classes;

  constructor(private lupoService: LupoService) { }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.classes = 'drag-over';
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.classes = '';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length === 1) {
      this.lupoService.convertLupoFile(files[0]).then((lupoResponse: ABPDatabase) => {
        this.lupoService.setDatabase(lupoResponse);
      });
    }
    this.classes = '';
  }
}
