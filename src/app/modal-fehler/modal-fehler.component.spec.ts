import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFehlerComponent } from './modal-fehler.component';

describe('ModalFehlerComponent', () => {
  let component: ModalFehlerComponent;
  let fixture: ComponentFixture<ModalFehlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFehlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFehlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
