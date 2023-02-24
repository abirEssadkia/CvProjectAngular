import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-skills',
  templateUrl: './container-skills.component.html',
  styleUrls: ['./container-skills.component.css']
})
export class ContainerSkillsComponent implements OnInit {
  language1:string = "English"
  progress1:string = "100%"
  language2:string = "Spanish"
  progress2:string = "75%"
  language3:string = "Frensh"
  progress3:string = "30%"
  language4:string = "Portuguese"
  progress4:string = "75%"
  constructor() { }

  ngOnInit(): void {
  }

}
