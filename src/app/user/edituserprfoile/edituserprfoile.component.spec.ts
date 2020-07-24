import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserprfoileComponent } from './edituserprfoile.component';

describe('EdituserprfoileComponent', () => {
  let component: EdituserprfoileComponent;
  let fixture: ComponentFixture<EdituserprfoileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserprfoileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserprfoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
