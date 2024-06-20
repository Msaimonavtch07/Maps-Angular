import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangerPageComponent } from './pages/zoom-ranger-page/zoom-ranger-page.component';

const routes: Routes = [

  {
    path: '',
    component: MapsLayoutComponent,
      children: [
        { path: 'fullScreen', component: FullScreenPageComponent },
        { path: 'markers', component: MarkersPageComponent },
        { path: 'properties', component: PropertiesPageComponent },
        { path: 'zoomRanger', component: ZoomRangerPageComponent },
        { path: '**', redirectTo: 'fullScreen' },
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
