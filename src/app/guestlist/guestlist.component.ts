import { Component, OnInit } from '@angular/core';
import { GuestService } from "../guest.service";
@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {
  guestList$ = this.guestService.guests$;
  elementType: "url" | "canvas" | "img" = "url";
  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

}
