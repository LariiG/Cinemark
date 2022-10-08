import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishCadasterComponent } from './finish-cadaster.component';

describe('FinishCadasterComponent', () => {
  let component: FinishCadasterComponent;
  let fixture: ComponentFixture<FinishCadasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishCadasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishCadasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
