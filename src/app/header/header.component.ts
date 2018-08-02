import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
