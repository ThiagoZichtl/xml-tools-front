import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessXmlComponent } from './success-xml.component';

describe('SuccessXmlComponent', () => {
  let component: SuccessXmlComponent;
  let fixture: ComponentFixture<SuccessXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessXmlComponent]
    });
    fixture = TestBed.createComponent(SuccessXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
