import { Component, OnInit , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import Swal from "sweetalert2";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
list=['banana','ananas','tomatos'];
  constructor() { }

  ngOnInit(): void {
  }

}
