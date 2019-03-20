import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { NowPlayingComponent } from './now-playing.component';

const routes: Routes = [{ path: '', component: NowPlayingComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class NowPlayingRoutingModule {}
