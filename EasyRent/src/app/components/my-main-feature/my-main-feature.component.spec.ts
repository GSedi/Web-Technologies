import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMainFeatureComponent } from './my-main-feature.component';

describe('MyMainFeatureComponent', () => {
  let component: MyMainFeatureComponent;
  let fixture: ComponentFixture<MyMainFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMainFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMainFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
