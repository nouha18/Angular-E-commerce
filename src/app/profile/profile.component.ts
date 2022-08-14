import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isActive = false;
  public show = true;
  public buttonName: any = 'Show';
  constructor() {}
  public loginUserAccount(): void {
  this.isActive = (this.isActive !== true);
  }
  toggle() {
      this.show = !this.show;
      console.log(this.show);

  }

  getType() {
      return this.isActive ? '' : 'null';
  }
  ngOnInit(): void {
  }

}
