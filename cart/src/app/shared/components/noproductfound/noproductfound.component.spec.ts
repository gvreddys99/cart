import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoproductfoundComponent } from './noproductfound.component';

describe('NoproductfoundComponent', () => {
  let component: NoproductfoundComponent;
  let fixture: ComponentFixture<NoproductfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoproductfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoproductfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
