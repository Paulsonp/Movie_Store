import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MovieDetailComponent } from "./movie-detail.component"

const routes: Routes = [
	{ path: "", component: MovieDetailComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class MovieDetailRoutingModule { }
