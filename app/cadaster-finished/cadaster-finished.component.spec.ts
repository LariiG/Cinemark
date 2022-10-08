import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadasterFinishedComponent } from './cadaster-finished.component';

describe('CadasterFinishedComponent', () => {
  let component: CadasterFinishedComponent;
  let fixture: ComponentFixture<CadasterFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadasterFinishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadasterFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
