import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TvDetailComponent } from './tv-detail.component';
import { TvDetailRoutingModule } from './tv-detail.routing';

@NgModule({
  imports: [NativeScriptCommonModule, TvDetailRoutingModule],
  declarations: [TvDetailComponent]
})
export class TvDetailModule {}
