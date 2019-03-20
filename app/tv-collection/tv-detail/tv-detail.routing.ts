import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TvDetailComponent } from './tv-detail.component';

const routes: Routes = [{ path: '', component: TvDetailComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TvDetailRoutingModule {}
