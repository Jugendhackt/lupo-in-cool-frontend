import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LupoService} from "../lupo.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private timer: number;

  constructor(public lupoService: LupoService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timer = window.setInterval(() => {
      this.cdRef.detectChanges();
    }, 500);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
