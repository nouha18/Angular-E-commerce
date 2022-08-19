import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: Object = {};
  isActive = false;
  public show = true;
  public buttonName: any = 'Show';
  constructor(public authService: AuthService,
    private actRoute: ActivatedRoute) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.authService.getUserProfile(id).subscribe((res) => {
        this.currentUser = res.msg;
        this.isActive = (this.isActive == true);
      });
    }
    get userdetails(): any {
      return localStorage.getItem('User');
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
