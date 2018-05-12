import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-footer-stunden-color',
  templateUrl: './footer-stunden-color.component.html',
  styleUrls: ['./footer-stunden-color.component.scss']
})
export class FooterStundenColorComponent implements OnInit, OnChanges {

  @Input() public stundenzahl: number;
  public background: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.background = this.calculateClass();
  }
  private calculateClass(): string {
    if (this.stundenzahl < 28) {
      // red
      return '#FB2B11';
    } else if (this.stundenzahl < 33) {
      // gelb
      return '#fff200 ';
    } else if (this.stundenzahl < 37) {
      // gruen
      return '#39FF14';
    } else {
      // dgruen
      return '#1CB200';
    }
  }
}
