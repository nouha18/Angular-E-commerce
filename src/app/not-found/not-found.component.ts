import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }
  scriptfunct() {
    if (document.referrer && document.location.host && document.referrer.match(new RegExp("^https?://" + document.location.host))) {
      document.getElementById("back-link").setAttribute("href", document.referrer);
    }
  }
  ngOnInit(): void {
    this.scriptfunct();
  }

}
