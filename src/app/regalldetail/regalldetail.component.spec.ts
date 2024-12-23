import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegalldetailComponent } from './regalldetail.component';

describe('RegalldetailComponent', () => {
  let component: RegalldetailComponent;
  let fixture: ComponentFixture<RegalldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegalldetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegalldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
