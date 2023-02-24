import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
  title = 'cvProject';
  experience:string = "experience"
  Education:string = "Education"
  interest:string = "interest"
  Skills:string = "Skills"
  Contract:string = "Contract"

  bodySection1:string="Media Direcot, Melbourne Managing the B2B communication of Company D"
  bodySection2:string="Media Direcot, Melbourne Managing the B2B communication of Company D"
  date1:string="2015 - 2017"
  date2:string="2020 - 2022"
  title1:string="company D"
  title2:string="company f"
  bodySection3:string="Media Direcot, Melbourne Managing the B2B communication of Company D"
  bodySection4:string="Media Direcot, Melbourne Managing the B2B communication of Company D"
  date3:string="2015 - 2017"
  date4:string="2020 - 2022"
  title3:string="company D"
  title4:string="company f"
  bodySection5:string="Media Direcot, Melbourne Managing the B2B communication of Company D"
  bodySection6:string="Media Direcot, Melbourne Managing the B2B communication of Company D"
  date5:string="2015 - 2017"
  date6:string="2020 - 2022"
  title5:string="company D"
  title6:string="company f"
  constructor() { }

  ngOnInit(): void {
  }

}
