import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBackgroundImageComponent } from './upload-background-image.component';

describe('UploadBackgroundImageComponent', () => {
  let component: UploadBackgroundImageComponent;
  let fixture: ComponentFixture<UploadBackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBackgroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
