import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { SectionComponent } from './section/section.component';
import { SkillComponent } from './skill/skill.component';
import { ImgComponent } from './img/img.component';
import { InterestComponent } from './interest/interest.component';
import { ContactComponent } from './contact/contact.component';
import { TitleComponent } from './title/title.component';
import { ContainerSkillsComponent } from './container-skills/container-skills.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LeftSideComponent } from './left-side/left-side.component';



@NgModule({
  declarations: [
 
    SubtitleComponent,
    SectionComponent,
    SkillComponent,
    ImgComponent,
    InterestComponent,
    ContactComponent,
    TitleComponent,
    ContainerSkillsComponent,
    RightSideComponent,
    LeftSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RightSideComponent,
    LeftSideComponent
  


  ]
})
export class CvModuleModule { }
