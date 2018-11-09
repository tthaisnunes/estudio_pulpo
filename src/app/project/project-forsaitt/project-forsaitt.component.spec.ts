import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectForsaittComponent } from './project-forsaitt.component';

describe('ProjectForsaittComponent', () => {
  let component: ProjectForsaittComponent;
  let fixture: ComponentFixture<ProjectForsaittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectForsaittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectForsaittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
