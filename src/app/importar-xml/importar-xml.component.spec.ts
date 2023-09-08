import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarXmlComponent } from './importar-xml.component';

describe('ImportarXmlComponent', () => {
  let component: ImportarXmlComponent;
  let fixture: ComponentFixture<ImportarXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportarXmlComponent]
    });
    fixture = TestBed.createComponent(ImportarXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
