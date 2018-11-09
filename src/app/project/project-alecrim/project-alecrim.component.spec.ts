import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAlecrimComponent } from './project-alecrim.component';

describe('ProjectAlecrimComponent', () => {
  let component: ProjectAlecrimComponent;
  let fixture: ComponentFixture<ProjectAlecrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAlecrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAlecrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
