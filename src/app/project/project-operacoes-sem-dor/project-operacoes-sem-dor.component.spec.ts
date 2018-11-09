import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOperacoesSemDorComponent } from './project-operacoes-sem-dor.component';

describe('ProjectOperacoesSemDorComponent', () => {
  let component: ProjectOperacoesSemDorComponent;
  let fixture: ComponentFixture<ProjectOperacoesSemDorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOperacoesSemDorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOperacoesSemDorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
