import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionService } from './shared/services/collection.services';
import { TvCollectionService } from './shared/services/tv-collection.services';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpModule,
    NativeScriptHttpModule,
    NativeScriptCommonModule,
    YoutubePlayerModule
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [CollectionService, TvCollectionService]
})
export class AppModule {}
