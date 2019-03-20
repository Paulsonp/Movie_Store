import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import { CollectionService } from '../../shared/services/collection.services';
@Component({
  selector: 'TopRated',
  moduleId: module.id,
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  lastDelY = 0;
  headerCollapsed = false;
  selectedTab = 0;
  selectedTabview = 0;
  items: any;
  processing: any;

  constructor(private cl_services: CollectionService, private routerExtensions: RouterExtensions) {
    this.processing = true;
    this.cl_services.getTopRatedMovies().subscribe(res => {
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

  goBack(): void {
    this.routerExtensions.back();
  }
}
