import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { UpcomingComponent } from './upcoming.component';

const routes: Routes = [{ path: '', component: UpcomingComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class UpcomingRoutingModule {}
