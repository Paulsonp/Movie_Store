import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'collection', loadChildren: './movie-collection/collection.module#CollectionModule' },
  { path: 'nowPlaying', loadChildren: './movie-collection/now-playing/now-playing.module#NowPlayingModule' },
  { path: 'upcoming', loadChildren: './movie-collection/upcoming/upcoming.module#UpcomingModule' },
  { path: 'popular', loadChildren: './movie-collection/popular/popular.module#PopularModule' },
  { path: 'topRated', loadChildren: './movie-collection/top-rated/top-rated.module#TopRatedModule' },
  {
    path: 'movieDetail/:id',
    loadChildren: './movie-collection/collection-details/movie-detail.module#MovieDetailModule'
  },
  { path: 'tvCollection', loadChildren: './tv-collection/tv-collection.module#TvCollectionModule' },
  {
    path: 'tvDetail/:id',
    loadChildren: './tv-collection/tv-detail/tv-detail.module#TvDetailModule'
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
