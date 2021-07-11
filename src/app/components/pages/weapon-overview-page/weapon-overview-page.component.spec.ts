import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeaponOverviewPageComponent} from './weapon-overview-page.component';

describe('CompareComponent', () => {
  let component: WeaponOverviewPageComponent;
  let fixture: ComponentFixture<WeaponOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaponOverviewPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
