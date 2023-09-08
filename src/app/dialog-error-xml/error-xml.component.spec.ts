import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorXmlComponent } from './error-xml.component';

describe('ErrorXmlComponent', () => {
  let component: ErrorXmlComponent;
  let fixture: ComponentFixture<ErrorXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorXmlComponent]
    });
    fixture = TestBed.createComponent(ErrorXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
