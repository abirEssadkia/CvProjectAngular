import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSkillsComponent } from './container-skills.component';

describe('ContainerSkillsComponent', () => {
  let component: ContainerSkillsComponent;
  let fixture: ComponentFixture<ContainerSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
