import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStundenColorComponent } from './footer-stunden-color.component';

describe('FooterStundenColorComponent', () => {
  let component: FooterStundenColorComponent;
  let fixture: ComponentFixture<FooterStundenColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStundenColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStundenColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
