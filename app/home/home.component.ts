import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { Page } from 'ui/page';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {}
}
