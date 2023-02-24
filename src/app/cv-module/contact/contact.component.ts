import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  

   @Input() logo!:string
   @Input() text !:string
  // @Input() head !:string
  

}
