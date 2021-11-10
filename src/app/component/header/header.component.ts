import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display : any = false;



  clickMenu(){
    this.display = true;
  }

  closeMenu(){
    this.display = false;
  }



}
