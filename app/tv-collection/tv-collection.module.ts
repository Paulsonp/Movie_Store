import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TvCollectionComponent } from './tv-collection.component';
import { TvCollectionRoutingModule } from './tv-collection.routing';

@NgModule({
  imports: [NativeScriptCommonModule, TvCollectionRoutingModule],
  declarations: [TvCollectionComponent]
})
export class TvCollectionModule {}
