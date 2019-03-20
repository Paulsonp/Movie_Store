import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TvCollectionComponent } from './tv-collection.component';

const routes: Routes = [{ path: '', component: TvCollectionComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TvCollectionRoutingModule {}
