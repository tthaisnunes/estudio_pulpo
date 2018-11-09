import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAlecrimComponent } from './project-alecrim.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { FooterComponent } from '../../shared/footer/footer.component';

import { BannerComponent } from '../common/banner/banner.component';
import { DescriptionComponent } from '../common/description/description.component';

describe('ProjectAlecrimComponent', () => {
  let component: ProjectAlecrimComponent;
  let fixture: ComponentFixture<ProjectAlecrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectAlecrimComponent,
        MenuComponent,
        FooterComponent,
        BannerComponent,
        DescriptionComponent
      ]
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

  it('should have the menu component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-menu')).not.toBe(null);
  }));

  it('should have the banner component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-banner')).not.toBe(null);
  }));

  it('should have the description component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-description')).not.toBe(null);
  }));

  it('should have the footer component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBe(null);
  }));

});
