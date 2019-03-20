import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { switchMap } from 'rxjs/operators';
import { Page } from 'ui/page';
import { PageRoute } from 'nativescript-angular/router';
import { CollectionService } from '../../shared/services/collection.services';
@Component({
  selector: 'MovieDetail',
  moduleId: module.id,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  itemId: number;
  item: any;
  videos: any;
  processing: any;
  genres: any;

  constructor(
    private pageRoute: PageRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private cl_services: CollectionService
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.processing = true;
    this.pageRoute.activatedRoute.pipe(switchMap(activatedRoute => activatedRoute.params)).forEach(params => {
      this.itemId = +params['id'];
      this.cl_services.getMoviesDetails(this.itemId).subscribe(res => {
        this.processing = false;
        this.item = res;
        this.genres = this.item.genres;
      });
      this.cl_services.getMoviesVideos(this.itemId).subscribe(res => {
        this.processing = false;
        this.videos = res.results['0'];
        console.log('res drop', this.videos);
      });
    });
  }

  toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
