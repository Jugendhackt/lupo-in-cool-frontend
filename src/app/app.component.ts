import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LupoService} from "./lupo.service";
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private lupoService: LupoService, private cdRef: ChangeDetectorRef) {}

  private timer: number;

  ngOnDestroy(): void {
    this.timer = window.setInterval(() => {
      this.cdRef.markForCheck();
    }, 100);
  }

  ngOnInit(): void {
    window.clearInterval(this.timer);
  }
}
