import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-about',
  templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
