import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { CollectionService } from '../shared/services/collection.services';
import { CollectionModel } from '../shared/models/collection.model';

@Component({
  selector: 'Collection',
  moduleId: module.id,
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  lastDelY = 0;
  headerCollapsed = false;
  selectedTab = 0;
  selectedTabview = 0;
  items: any;
  processing: any;
  trending: any;

  constructor(private cl_services: CollectionService, private page: Page, private routerExtensions: RouterExtensions) {
    // this.page.actionBarHidden = true;
    this.processing = true;
    this.cl_services.getCollections().subscribe(res => {
      this.processing = false;
      this.items = res.results;
      this.cl_services.getTrendingMovies().subscribe(res => {
        this.trending = res.results;
        console.log('dfghjk', this.trending);
      });
    });
  }

  ngOnInit(): void {}

  showItem(itemId) {
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

  //Top nav bar tap methods
  onBellTap() {}

  onSearchTap() {}

  onPopularTap() {
    this.selectedTabview = 0;
  }

  onCategoryTap() {
    this.selectedTabview = 1;
  }

  onPromosTap() {
    this.selectedTabview = 2;
  }

  //Bottom nav bar tap methods
  onHomeTap() {
    this.selectedTab = 0;
  }

  onCartTap() {
    this.selectedTab = 1;
  }

  onHistoryTap() {
    this.selectedTab = 2;
  }

  onAboutTap() {
    this.selectedTab = 3;
  }
}
