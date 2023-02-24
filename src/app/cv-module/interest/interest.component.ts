import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  
  @Input() logo!:string
  @Input() text !:string
  @Input() head !:string


  constructor() { }

  ngOnInit(): void {
  }

}
