import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { TvCollectionService } from '~/shared/services/tv-collection.services';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'tvCollection',
  templateUrl: './tv-collection.component.html',
  styleUrls: ['./tv-collection.component.css']
})
export class TvCollectionComponent implements OnInit {
  items: any;
  processing: any;

  constructor(
    private cl_services: TvCollectionService,
    private page: Page,
    private routerExtensions: RouterExtensions
  ) {
    this.processing = true;
    this.cl_services.getTvTodayCollections().subscribe(res => {
      this.processing = false;
      this.items = res.results;
    });
  }

  ngOnInit(): void {}
  showItem(itemId) {
    this.routerExtensions.navigate([
      'tvDetail/' + itemId,
      {
        animated: true,
        transition: {
          name: 'slideTop',
          duration: 380,
          curve: 'easeIn'
        }
      }
    ]);
    console.log(`Tapped on ${itemId}`);
    // showItem(itemId) {
    //   console.log(`Tapped on ${itemId}`);
    //   this.routerExtensions.navigate([
    //     'tvDetail/' + itemId,
    //     {
    //       animated: true,
    //       transition: {
    //         name: 'slideTop',
    //         duration: 380,
    //         curve: 'easeIn'
    //       }
    //     }
    //   ]);
  }
}
