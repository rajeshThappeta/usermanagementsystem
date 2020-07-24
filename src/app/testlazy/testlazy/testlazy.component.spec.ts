import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlazyComponent } from './testlazy.component';

describe('TestlazyComponent', () => {
  let component: TestlazyComponent;
  let fixture: ComponentFixture<TestlazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
