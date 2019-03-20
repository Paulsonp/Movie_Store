import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import { CollectionService } from '../../shared/services/collection.services';
@Component({
  selector: 'Upcoming',
  moduleId: module.id,
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  lastDelY = 0;
  headerCollapsed = false;
  selectedTab = 0;
  selectedTabview = 0;
  items: any;
  processing: any;

  constructor(private cl_services: CollectionService, private page: Page, private routerExtensions: RouterExtensions) {
    // this.page.actionBarHidden = true;
    this.processing = true;
    this.cl_services.getUpcomingMovies().subscribe(res => {
      this.items = res.results;
      this.processing = false;
      console.log('hai now playing', this.items);
    });
  }

  ngOnInit(): void {}

  showItem(itemId) {
    console.log(`Tapped on ${itemId}`);
    this.routerExtensions.navigate([
      'movieDetail/' + itemId,
      {
        animated: true,
        transition: {
          name: 'slideTop',
          duration: 380,
          curve: 'easeIn'
        }
      }
    ]);
  }

  toggleLike(item) {
    item.isLike = !item.isLike;
    if (item.isLike) {
      item.likes += 1;
    } else {
      item.likes -= 1;
    }
  }

  toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
  }

  categoryIcon(itemCategory) {
    switch (itemCategory) {
      case 'Burger':
        return String.fromCharCode(0xf0f5); //"fa-cutlery";
        break;
      case 'Beer':
        return String.fromCharCode(0xf0fc); //"fa-beer";
        break;
      case 'Pancake':
        return String.fromCharCode(0xf0f4); //"fa-coffee";
        break;
      case 'Cake':
        return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
        break;
      default:
        return String.fromCharCode(0xf06d); //"fa-fire";
        break;
    }
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
