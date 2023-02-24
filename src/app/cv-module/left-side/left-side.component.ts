import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  image:string="abir" 
  contact:string="Contact"
  Interest:string = "Interests"
  logo1:string="elec"
  text1:string="i do like"
  head1:string="Running"
  logo2:string="aaa"
  text2:string="mail"
  

 
  constructor() { }

  ngOnInit(): void {
  }

}
