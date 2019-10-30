import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
// tslint:disable-next-line:no-unused-variable
const ROUTES: Routes = [
    {path: '', component: AboutComponent}
];

@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule {}
