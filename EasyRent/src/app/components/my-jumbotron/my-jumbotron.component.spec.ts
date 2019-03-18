import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJumbotronComponent } from './my-jumbotron.component';

describe('MyJumbotronComponent', () => {
  let component: MyJumbotronComponent;
  let fixture: ComponentFixture<MyJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
