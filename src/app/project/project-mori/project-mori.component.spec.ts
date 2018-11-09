import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMoriComponent } from './project-mori.component';

describe('ProjectMoriComponent', () => {
  let component: ProjectMoriComponent;
  let fixture: ComponentFixture<ProjectMoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
