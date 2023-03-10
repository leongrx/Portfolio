import { Component, Injectable, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public aboutMe: boolean = false;
  public skills: boolean = false;
  public portfolio: boolean = false;
  public isClicked: boolean = false;
  public mobile: boolean = false;
  
  constructor(private appComponent: AppComponent) {}

  ngOnInit(): void {
}

checkMobile() {
  if (document.body.clientWidth <= 768) {
    this.mobile = true;
  } else {
    this.mobile = false;
  }
}
  select(key: string) {
    switch (key) {
      case 'aboutMe':
        this.aboutMe = true;
        this.skills = false;
        this.portfolio = false;
        break;
      case 'skills':
        this.aboutMe = false;
        this.skills = true;
        this.portfolio = false;
        break;
      default:
        this.aboutMe = false;
        this.skills = false;
        this.portfolio = true;
        break;
    }
  }
  
  public resetSelect() {
    this.aboutMe = false;
    this.skills = false;
    this.portfolio = false;
  }

  public openMobileMenu() {
    this.isClicked = true;
  }

  public closeMobileMenu() {
    this.isClicked = false;
  }

}
