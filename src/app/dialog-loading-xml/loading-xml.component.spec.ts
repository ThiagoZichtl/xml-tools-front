import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingXmlComponent } from './loading-xml.component';

describe('LoadingXmlComponent', () => {
  let component: LoadingXmlComponent;
  let fixture: ComponentFixture<LoadingXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingXmlComponent]
    });
    fixture = TestBed.createComponent(LoadingXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
