import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullXmlComponent } from './null-xml.component';

describe('NullXmlComponent', () => {
  let component: NullXmlComponent;
  let fixture: ComponentFixture<NullXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NullXmlComponent]
    });
    fixture = TestBed.createComponent(NullXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
